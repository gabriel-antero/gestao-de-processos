import React, { useState, useCallback } from 'react';

import { useForm } from 'react-hook-form';
import Select from 'react-select'

import { yupResolver } from '@hookform/resolvers';

import { addClientSchema } from '../../helpers/yup';

import api from '../../services/api';

import ModalSuccess from '../../components/ModalSuccess';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { cpfMask, phoneMask } from '../../helpers/mask';

import {
  Container,
  Header,
  Content,
  TitleContainer,
  Title,
  SkillsContainer,
  SelectTitle,
  Form,
} from './styles';

const AddClient = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(addClientSchema) });
  const [firstSkill, setFirstSkill] = useState('');
  const [secondSkill, setsecondSkill] = useState('');
  const [thirdSkill, setThirdSkill] = useState('');

  const options = [
    { value: 'Gerência de Projetos', label: 'Gerência de Projetos' },
    { value: 'Controle Financeiro', label: 'Controle Financeiro' },
    { value: 'Desenvolvimento Back End', label: 'Desenvolvimento Back End' },
    { value: 'Controle de estoque', label: 'Controle de estoque' },
    { value: 'Desenvolvimento front end', label: 'Desenvolvimento front end' },
    { value: 'Banco de dados', label: 'Banco de dados' },
    { value: 'DevOps', label: 'DevOps' },
  ]

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  const handleFisrtSkill = useCallback((e) => {
      setFirstSkill(e.value)
  }, [])

  const handleSecondSkill = useCallback((e) => {
    setsecondSkill(e.value)
  }, [])

  const handleThirdSkill = useCallback((e) => {
    setThirdSkill(e.value)
  }, [])

  const onSubmit = async ({
    phone,
    email,
    cpf,
    name,
   }) => {

    try {
      const skills = {
        firstSkill: firstSkill,
        secondSkill: secondSkill,
        thirdSkill: thirdSkill,
      }

      await api.post('/registrar', {
        name,
        email,
        cpf,
        skills,
        phone,
      });

      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header>
        <div />
      </Header>

      <ModalSuccess
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        title="Cliente criado"
        description="Cliente criado com sucesso! Aguarde a validação."
      />

      <Content>
        <TitleContainer>
          <Title>Adicionar Cliente</Title>
        </TitleContainer>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            register={register}
            label="Nome"
            placeholder="Nome"
            error={errors.name?.message}
          />
          <Input
            name="email"
            register={register}
            label="Email"
            placeholder="Email"
            error={errors.email?.message}
          />
          <Input
            name="cpf"
            register={register}
            label="CPF"
            placeholder="000.000.000-00"
            error={errors.cpf?.message}
            onChange={(event) => {
              event.currentTarget.maxLength = 14;
              const { value } = event.target;
              event.target.value = cpfMask(value);
            }}
          />
          <Input
            name="phone"
            register={register}
            label="Telefone"
            placeholder="(00) 00000-0000"
            error={errors.phone?.message}
            onChange={(event) => {
              event.currentTarget.maxLength = 15;
              const { value } = event.target;
              event.target.value = phoneMask(value);
            }}
          />

          <SkillsContainer>
            <SelectTitle>Habilidades</SelectTitle>
            <Select options={options} onChange={handleFisrtSkill} name="firstSkill"/>
            <Select options={options} onChange={handleSecondSkill} name="secondSkill"/>
            <Select options={options} onChange={handleThirdSkill} name="thirdSkill"/>
          </SkillsContainer>

          <div />

          <Button type="submit" style={{ width: 176 }}>Salvar</Button>
        </Form>


      </Content>
    </Container>
  );
};

export default AddClient;
