import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
    background: none;
    display: flex;
    border: none;
    margin-left: 24px;
    align-items: center;
    margin-bottom: 5px;
    position: relative;

    @media screen and (max-width: 520px) {
        position: unset;
    }

    img#user {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }

    img#dots {
        height: 16px;
    }

    img + img {
        margin-left: 8px;
    }

    button {
        background: none;
        border: none;
        display: flex;
        align-items: center;
    }
`;

export const Content = styled.div`
    display: ${({ active }) => (active ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    width: 356px;
    right: 35%;
    top: 100%;
    right: 60%;
    margin-top: 7px;

    @media screen and (max-width: 520px) {
        width: 100vw;
        right: 0;
        top: 5rem;
    }

    .arrow {
        display: block;
        width: 0px;
        height: 0px;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid
            ${({ theme }) => theme.colors['dark-secondary']};
        margin-left: auto;

        @media screen and (max-width: 520px) {
            display: none;
        }
    }
`;

export const ListItems = styled.ul`
    display: block;
    list-style: none;
    background: ${({ theme }) => theme.colors.dark};
    width: 100%;
    max-height: 235px;
    flex: 1;
    overflow: auto scroll;
    border-radius: 4px;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: rgb(37, 36, 43);
    }

    &::-webkit-scrollbar-thumb {
        background: #5748ad;
    }
`;

export const Item = styled.li`
    padding: ${({ theme }) => `${theme.spaces[3]}px`};
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid rgb(33, 32, 44);
    display: flex;
    align-items: center;
    background: inherit;

    &:hover {
        background: ${({ theme }) => darken(0.1, theme.colors.dark)};
    }

    svg {
        color: ${({ theme }) => theme.colors.primary};
        margin-right: ${({ theme }) => `${theme.spaces[2]}px`};
    }

    span {
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.fontSizes['2xs']};
        font-weight: bold;
    }

    a {
        text-decoration: none;
        width: 100%;
        display: flex;
        align-items: center;
    }
`;
