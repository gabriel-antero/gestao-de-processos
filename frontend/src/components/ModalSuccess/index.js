import React from 'react';

import Modal from '../Modal';
import Close from '../../assets/Close-Icon.svg';

import { Container, CloseIcon, Title, Description } from './styles';

const ModalSuccess = ({
  isOpen,
  setIsOpen,
  title,
  description,
}) => (
  <Modal isOpen={isOpen} setIsOpen={setIsOpen} width="592px" height="160px">
    <Container>
      <CloseIcon src={Close} alt="Close-test" onClick={setIsOpen} />

      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  </Modal>
);

export default ModalSuccess;
