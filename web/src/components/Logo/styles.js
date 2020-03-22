import styled, { css } from 'styled-components';
import { space } from 'styled-system';

export const Container = styled.div`
    ${({ withBorder }) =>
        withBorder &&
        css`
            border: 1px solid ${({ theme }) => theme.colors.white};
        `}
    border-radius: 10px;
    width: 148px;
    height: 40px;
    ${space}

    display: flex;
`;

export const Text = styled.strong`
    font-family: 'Montserrat', 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.yellow};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin: auto;
    text-transform: uppercase;
`;
