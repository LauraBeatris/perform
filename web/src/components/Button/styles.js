import styled, { css } from 'styled-components';
import { color, fontSize } from 'styled-system';

export const Container = styled.button`
    ${color}
    ${fontSize}

    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 150px;
    min-height: 52px;
    border-radius: 10px;
    border: none;
    font-weight: bold;

    ${({ hasIcon }) =>
        hasIcon &&
        css`
            svg {
                margin-left: 4px;
            }
        `}
`;

export const Text = styled.span``;
