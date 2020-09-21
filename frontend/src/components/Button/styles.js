import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    width: 100%;
    height: 40px;

    border: 0;
    background: #2783fd;

    color: #FFFFFF;
    line-height: 24px;
    font-weight: 600;
    font-size: 14px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#2783fd')};
    }
`;
