import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    >:first-child {
      border: 0;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 480px;
  height: 408px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  margin-bottom: 40px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 384px;
`;
