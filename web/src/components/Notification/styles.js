import styled from 'styled-components';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { darken, lighten } from 'polished';

export const Container = styled.div`
    position: relative;

    @media screen and (max-width: 520px) {
        position: unset;
    }

    button {
        background: none;
        border: none;
        position: relative;
    }
`;

export const Icon = styled(IoMdNotificationsOutline)`
    color: ${({ theme }) => theme.colors['dark-secondary']};
    font-size: ${({ theme }) => theme.fontSizes.lg};

    display: flex;
    align-items: center;
`;

export const Badge = styled.span`
    background: ${({ theme }) => theme.colors.warning};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: -5px;
    top: -5px;
    width: 24px;
    height: 24px;
    border: 3px solid #eee;
    box-sizing: content-box;
`;

export const Content = styled.div`
    display: ${({ active }) => (active ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    width: 356px;
    right: 35%;

    @media screen and (max-width: 520px) {
        width: 100vw;
        right: 0;
        margin-top: 12px;
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

    header {
        background: ${({ theme }) => theme.colors.dark};
        padding: ${({ theme }) => `${theme.spaces[3]}px`};
        border-radius: 4px 0 0 0;
        display: flex;

        strong {
            color: ${({ theme }) => theme.colors.white};
            font-size: ${({ theme }) => theme.fontSizes['2xs']};
        }

        button {
            color: ${({ theme }) => theme.colors.purple};
            background: none;
            border: none;
            margin-left: auto;
            font-size: ${({ theme }) => theme.fontSizes['2xs']};

            &:hover {
                color: ${({ theme }) => lighten(0.1, theme.colors.purple)};
            }
        }
    }

    footer {
        background: ${({ theme }) => theme.colors.dark};
        padding: ${({ theme }) => `${theme.spaces[3]}px`};
        border-radius: 0 0 4px 4px;

        button {
            color: ${({ theme }) => theme.colors.purple};
            font-weight: 400;
            margin: auto;
            font-size: ${({ theme }) => theme.fontSizes['2xs']};
            display: block;
        }
    }
`;

export const NotificationList = styled.ul`
    display: block;
    list-style: none;
    background: ${({ theme }) => darken(0.2, theme.colors['dark-secondary'])};
    width: 100%;
    max-height: 235px;
    flex: 1;
    overflow: auto scroll;

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
    border-bottom: 1px solid rgb(37, 36, 43);
    display: flex;

    &#empty-message {
        span {
            margin: 0 auto;
        }
    }

    button {
        border-radius: 4px;

        &:hover {
            background: ${({ theme }) => theme.colors.dark};
        }

        svg {
            color: ${({ theme }) => theme.colors.yellow};
            width: ${({ theme }) => theme.fontSizes.md};
        }

        small {
            color: ${({ theme }) => theme.colors.yellow};
            font-size: ${({ theme }) => theme.fontSizes.xs};
            font-weight: bold;
        }
    }
`;
