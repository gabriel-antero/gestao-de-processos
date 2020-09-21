'use strict'

const User = use('App/Models/User');

const { validateAll } = use('Validator');

class UserController {
  async create({ request, response }) {
    try {
      const erroMessage = {
        'username.required': 'Campo obrigatório',
        'username.unique': 'Nome de usuário já existente',
        'username.min': 'Nome de usuário deve ter no mínimo 5 caracteres',
        'email.required': 'Campo obrigatório',
        'email.unique': 'Email já existente',
        'email.email': 'Insira um email valido',
        'password.require': 'Campo obrigatório',
        'password.min': 'Senha deve ter no mínimo 6 caracteres'
      }

      const rules = {
        username: 'required|min:5|unique:users',
        email: 'required|email|unique:users',
        password: 'required|min:6'
      }

      const validation = await validateAll(request.all(), rules, erroMessage)

      if(validation.fails()) {
        return response.status(401).send({message: validation.messages()});
      }

      const {username, email, password, key} = request.all();

      if(key !== 'test'){
        return response.status(500).send({ error: `Key errada`})
      }

      const user = await User.create({username, email, password})

      return user
    } catch (err) {
      return response.status(500).send({ error: `Erro: ${err.message}`})
    }

  }

  async login ({request, response, auth}) {
    try {
      const erroMessage = {
        'email.required': 'Campo obrigatório',
        'email.email': 'Insira um email valido',
        'password.required': 'Campo obrigatório',
      }

      const rules = {
        email: 'required|email',
        password: 'required'
      }

      const validation = await validateAll(request.all(), rules, erroMessage);

      if(validation.fails()) {
        return response.status(401).send({message: validation.messages()})
      }

      const { email, password} = request.all()

      const tokenValidate = await auth.attempt(email, password);

      return tokenValidate;
    } catch (err) {
      return response.status(500).send({ error: `Erro: ${err.message}`})
    }
  }
}

module.exports = UserController
