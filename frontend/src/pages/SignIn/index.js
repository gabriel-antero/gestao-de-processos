import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import { useAuth } from '../../hooks/auth';

import { loginSchema } from '../../helpers/yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Form } from './styles';

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(loginSchema) });

  const { login } = useAuth();

  const onSubmit = async ({ email, password }) => {
    try {
      await login({ email, password });

      refreshPage()
    } catch (error) {
      console.log(error);
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Link to="/signup">Criar conta</Link>

          <Button type="submit">Entrar</Button>
        </Form>

      </Content>
    </Container>
  );
};

export default SignIn;
