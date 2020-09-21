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
  width: 100%;
  max-width: 592px;
  margin: auto;
  margin-bottom: 32px;
`;

export const TitleContainer = styled.div`
  height: 100%;
  margin-bottom: 32px;

  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 4.8rem;
  color: #2783fd;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;

export const SelectTitle = styled.p`
  color: #2783fd;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 5px;
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 32px;
  margin-bottom: 20px;

  >:last-child {
    justify-self: self-start;
  }

  @media (max-width: 500px) {
    grid-gap: 0;
    grid-template-columns: 1fr;

    >:last-child {
      margin: auto;
    }
  }
`;
