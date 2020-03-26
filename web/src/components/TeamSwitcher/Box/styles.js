import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { space } from 'styled-system';

export function getColor() {
    const number = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    const list = ['#5748ad', '#eda446', '#E14B4B'];
    return list[number];
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Message = styled.h3`
    ${space}
    text-align: center;
    font-size: 42px;
    color: ${({ theme }) => theme.colors['dark-secondary']};
    font-weight: 400;
`;

export const Box = styled.div`
    ${space}
    background: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    padding: ${({ theme }) => `${theme.spaces[4]}px`};

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;

    @media screen and (min-width: 1000px) {
        grid-gap: 24px;
        ${({ columns }) =>
            css`
                grid-template-columns: repeat(${columns}, 100px);
            `};
        align-self: center;
    }

`;

export const TeamBox = styled.div`
    border-radius: 4px;
    box-shadow: 1px 4px 6px -4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    min-height: 100px;
    display: flex;
    transition: box-shadow, background, transform 0.3s ease-in-out;

    ${({ color }) => css`
        background-color: ${color};

        &:hover {
            background-color: ${darken(0.1, color)};
            transform: translateY(-5px);
            box-shadow: 2px 5px 8px -4px rgba(0, 0, 0, 0.4);
        }
    `}

    &:active {
        transform: translateY(0px);
    }

    @media screen and (min-width: 1000px) {
        max-width: 100px;
    }

    span {
        margin: auto;
        font-size: ${({ theme }) => theme.fontSizes.lg};
        color: ${({ theme }) => theme.colors.primary};
        font-weight: bold;
    }
`;
