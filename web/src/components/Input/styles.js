import styled from 'styled-components';
import { color, space, fontSize, height } from 'styled-system';

export const Container = styled.div`
    width: 100%;
`;

export const Label = styled.label`
    display: inline-block;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes['2xs']};
    color: ${({ theme }) => theme.colors['dark-secondary']};
    font-weight: bold;
    margin-bottom: ${({ theme }) => `${theme.spaces[1]}px`};
`;

export const StyledInput = styled.input`
    ${color}
    ${space}
    ${fontSize}
    ${height}

    border: none;
    width: 100%;
    border-radius: 10px;

    ::placeholder {
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray};
    }
`;
