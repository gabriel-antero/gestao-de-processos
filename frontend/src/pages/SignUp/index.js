import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';

import { loginSchema } from '../../helpers/yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import { Container, Content, Form } from './styles';

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(loginSchema) });

  const history = useHistory();

  const onSubmit = async ({
    username,
    email,
    password,
    key,
   }) => {

    try {
      await api.post('/user', {
        username,
        email,
        password,
        key,
      });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <Input
            name="username"
            register={register}
            label="Nome de usuário"
            placeholder="Nome de usuário"
            error={errors.username?.message}
          />

          <Input
            name="email"
            register={register}
            label="E-mail"
            placeholder="E-mail"
            error={errors.email?.message}
          />

          <Input
            name="password"
            register={register}
            label="Senha"
            placeholder="Senha"
            type="password"
            error={errors.password?.message}
          />

          <Input
            name="key"
            register={register}
            label="Key"
            placeholder="Key"
            error={errors.email?.message}
          />

          <Button type="submit">Criar conta</Button>
        </Form>

      </Content>
    </Container>
  );
};

export default SignUp;
