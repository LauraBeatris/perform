import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { space, color, fontSize } from 'styled-system';

import { fadein } from '~/styles/animations/index';

export function getColor() {
    const number = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    const list = ['#5748ad', '#eda446', '#E14B4B'];
    return list[number];
}

export const Container = styled.nav`
    background: white;
    box-shadow: 1px 2px 4px -4px rgba(0, 0, 0, 0.7);
    display: flex;
    position: fixed;
    z-index: 1;

    @media screen and (max-width: 800px) {
        transition: height 0.3s ease-in-out;
        bottom: 5rem;
        height: 0rem;
        width: 100%;
        flex-direction: row;

        ${({ active }) =>
            active &&
            css`
                height: 15rem;
            `}
    }

    @media screen and (min-width: 1000px) {
        transition: width 0.3s ease-in-out, position 0.4s;
        height: 100vh;
        left: 5rem;
        top: 0;
        width: 0;
        flex-direction: column;

        ${({ active }) =>
            active &&
            css`
                width: 15rem;
            `}

        &.expanded {
            left: 15rem;
        }
    }

    & > div {
        ${({ active }) =>
            active
                ? css`
                      display: flex;
                      animation-name: ${fadein};
                      animation-duration: 1s;
                  `
                : css`
                      display: none;
                  `}
    }
`;

export const Content = styled.div`
    padding: ${({ theme }) => `${theme.spaces[3]}px`};
    overflow-y: scroll;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: #eee;
    }

    &::-webkit-scrollbar-thumb {
        background: #5748ad;
    }

    .row {
        margin: ${({ theme }) => `${theme.spaces[4]}px 0`};
        display: flex;
        justify-content: space-between;
    }
`;

export const InputWrapper = styled.div`
    position: relative;

    input {
        background: #eee;
        border-radius: 4px;
        border: none;
        height: ${({ theme }) => `${theme.spaces[4]}px`};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: 400;
        padding: ${({ theme }) =>
            `${theme.spaces[2]}px 0 ${theme.spaces[2]}px 30px`};
        color: ${({ theme }) => theme.colors.grayLight};
        max-width: 100%;
    }

    svg {
        color: ${({ theme }) => theme.colors.grayLight};
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 5px;
    }
`;

export const Title = styled.h3`
    ${space}
    font-size: 28px;
    color: ${({ theme }) => theme.colors['dark-secondary']};
    font-weight: bold;
    flex: 1;
`;

export const AddButton = styled.button`
    ${color}
    box-shadow: 2px 4px 6px -4px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    border: none;

    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.md};

    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;

    transition: background 0.3s, transform 0.3s;
    &:hover {
        background: ${({ backgroundColor }) => darken(0.1, backgroundColor)};
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
`;

export const Team = styled.button`
    border: none;
    border-radius: 35px;

    ${color}
    ${fontSize}
    ${({ active, theme, ...rest }) => css`
        background: ${active ? '#eee' : 'none'};
        color: ${active ? theme.colors.yellow : theme.colors[rest.color]};
    `};

    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 12px;
    width: 100%;
    min-height: 42px;

    transition: background 0.4s, color 0.4s;

    &:hover {
        background: #eee;
        color: ${({ theme }) => theme.colors.yellow};
    }

    & + & {
        margin-top: ${({ theme }) => `${theme.spaces[2]}px`};
    }

    button {
        margin-left: auto;
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.dark};
    }
`;
