import React, { useState, useEffect } from 'react';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import ModalSuccess from '../../components/ModalSuccess';

import Button from '../../components/Button';

import {
  Container,
  Content,
  TitleContainer,
  Title,
  CardContainer,
  Card,
  CardTitle,
  CardDescription,
  CardItens,
} from './styles';

const Dashboard = () => {
  const [clients, setClients] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const { logout } = useAuth();

  useEffect(() => {
    async function loadClients() {
      const { data } = await api.get('/validar');

      setClients(data);
    }

    loadClients();
  }, [clients]);

  const handleIsValid = async (clientId) => {
    await api.put(`/validar/${clientId}`, {
      isValid: 'Validado',
    });

    setModalOpen(!modalOpen);
  };

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <Container>
      <ModalSuccess
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        title="Cliente validado"
        description="Cliente validado com sucesso!"
      />

      <Content>
        <TitleContainer>
          <Title>Validar Cliente</Title>
          <Button style={{ width: 178 }} onClick={logout}>
            Sair
          </Button>
        </TitleContainer>
        <CardContainer>
          {clients
            && clients.map((client) => (
              <Card key={client.id}>

                <CardTitle>{client.name}</CardTitle>

                <div>
                  <CardTitle>Email: </CardTitle>
                  <CardDescription>{client.email}</CardDescription>
                </div>

                <div>
                  <CardTitle>CPF: </CardTitle>
                  <CardDescription>{client.cpf}</CardDescription>
                </div>

                <div>
                  <CardTitle>Telefone: </CardTitle>
                  <CardDescription>{client.phone}</CardDescription>
                </div>

                <div>
                  <CardTitle>Habilidades: </CardTitle>
                  <CardDescription>
                    {`- ${client.skills[0].firstSkill}`}
                  </CardDescription>
                  <CardDescription>

                    {`- ${client.skills[0].secondSkill}`}
                  </CardDescription>
                  <CardDescription>
                    {`- ${client.skills[0].thirdSkill}`}
                  </CardDescription>
                </div>

                <CardItens>
                  <CardDescription>{client.isValid}</CardDescription>
                </CardItens>

                {client.isValid === 'Não validado'
                  ? <Button
                    style={{ width: 178 }}
                    onClick={() => handleIsValid(client.id)}
                  >
                    Clique aqui para validar

                    </Button>
                  : null}
              </Card>
            ))}
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
