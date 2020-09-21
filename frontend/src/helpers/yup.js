import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatória'),
});

export const addClientSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório')
    .max(255, 'Limite maximo de 255 caracteres'),
  cpf: Yup.string().required('CPF obrigatório'),
  email: Yup.string().required('Email obrigatório').email('Digite um email válido')
    .max(255, 'Limite maximo de 255 caracteres'),
  phone: Yup.string().required('Telefone obrigatório'),
});
