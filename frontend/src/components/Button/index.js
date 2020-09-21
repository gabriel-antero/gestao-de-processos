import React from 'react';

import { Container } from './styles';

const Button = ({ children, loading, width, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
