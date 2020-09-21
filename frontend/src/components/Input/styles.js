import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  color: #2783fd;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #2783fd;
  padding: 8px;

  ${(props) => (props.error && css`border-color: #f00`)}
`;
