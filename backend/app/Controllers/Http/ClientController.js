'use strict'

const Client = use('App/Models/Client');
const Skill = use('App/Models/Skill');

const { validateAll, rule } = use('Validator');

class ClientController {
  async create({ request, response }) {
    try {
      const erroMessage = {
        'name.required': 'Campo obrigatório',
        'email.required': 'Campo obrigatório',
        'email.unique': 'Email já existente',
        'email.email': 'Insira um email valido',
        'cpf.require': 'Campo obrigatório',
        'cpf.regex': 'CPF invalido',
        'skills.require': 'Campo obrigatório',
        'phone.regex': 'Numero de telefone invalido'
      }

      const rules = {
        name: 'required|min:5',
        email: 'required|email|unique:clients',
        cpf: [rule("regex", /[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/), rule('unique', 'clients')],
        skills: 'required',
        phone: [rule("regex", /\([0-9]{2}\) [0-9]{5}-[0-9]{4}/)]
      }

      const validation = await validateAll(request.all(), rules, erroMessage)

      if(validation.fails()) {
        return response.status(401).send({message: validation.messages()});
      }

      const {name, email, cpf, skills, phone} = request.all();

      const data = {
        name,
        email,
        cpf,
        phone,
        isValid: 'Não validado',
      }

      const client = await Client.create(data);

      await Skill.create({client_id: client.id, ...skills})

      return client
    } catch (err) {
      return response.status(500).send({ error: `Erro: ${err.message}`})
    }
  }

  async index ({ request, response, view, auth }) {
    const client = await Client.query().table('clients').orderBy('name').with("skills").fetch();

    return client;
  }

  async update ({ params, request, response, auth }) {
    const { isValid } = request.all();

    const client = await Client.query().where('id', params.id).first()

    if(!client) {
        return response.status(404).send({message: 'Nenhum registro localizado'})
    }

    client.isValid = isValid

    await client.save();

    return client;
  }

}

module.exports = ClientController
