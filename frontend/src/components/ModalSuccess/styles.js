import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  height: 100%;

  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const CloseIcon = styled.img`
  width: 24px;
  height: 24px;

  position: absolute;
  top: 16px;
  right: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #212121;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 36px;
  color: #212121;
`;