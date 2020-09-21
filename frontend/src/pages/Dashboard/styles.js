import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

`;

export const Header = styled.div`
  margin-bottom: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Logo = styled.img`
  width: 145px;
  height: 37px;
`;

export const Logout = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 24px;
  color: #000;

  border: 0;
  background-color: transparent;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  height: 100%;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 30px;

    >:first-child {
      margin-bottom: 16px;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 4.0rem;
  line-height: 4.8rem;
  color: #2783fd;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 420px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 32px;
  justify-content: start;

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;

  margin-bottom: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  max-width: 280px;
  padding-left: 8px;
  height: 100%;
  margin-bottom: 40px;
  border-top: 1px solid #000;
`;

export const CardTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;

  margin-bottom: 4px;
`;

export const CardDescription = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  margin-bottom: 10px;
`;

export const CardItens = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 8px;

   &:hover {
    cursor: pointer;
  }
`;
