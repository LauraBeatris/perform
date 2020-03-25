import styled, { css } from 'styled-components';

import {
    strokeAnimation,
    strokeAnimationReverse,
} from '~/styles/animations/svg';

export const Container = styled.nav`
    display: flex;
    position: fixed;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 1px 2px 4px -4px rgba(0, 0, 0, 0.7);
    transition: width 0.3s ease-in-out;
    z-index: 2;

    @media screen and (max-width: 800px) {
        bottom: 0;
        height: 5rem;
        width: 100%;
        flex-direction: row;
    }

    @media screen and (min-width: 800px) {
        height: 100vh;
        width: 5rem;
        flex-direction: column;
    }

    li,
    li a,
    li button {
        flex-direction: column;
    }

    &.expanded {
        width: 15rem;

        li {
            width: 150px;
        }

        li,
        li a,
        li button {
            flex-direction: row;
        }

        strong {
            display: inline-block;
            margin-left: 8px;
            font-size: 18px;
            align-self: center;
            color: ${({ theme }) => theme.colors.gray};
            font-weight: 500;
        }
    }
`;

export const MenuToggle = styled.div`
    position: relative;
    display: none;

    @media screen and (min-width: 800px) {
        display: flex;
        align-items: center;
    }

    svg {
        fill: none;
        stroke: ${({ theme }) => theme.colors['dark-secondary']};
        stroke-width: 7px;
        stroke-linecap: round;
        stroke-linejoin: round;
        max-height: 40px;
        margin-top: 16px;
        width: 100px;

        use {
            &:nth-of-type(1) {
                opacity: 1;
                stroke-dashoffset: 221;
                stroke-dasharray: 46 249;
                transition: stroke-dashoffset 0.12s linear 0.2s,
                    stroke-dasharray 0.12s linear 0.2s, opacity 0s linear 0.2s;
            }

            &:nth-of-type(2) {
                animation: ${strokeAnimationReverse} 1.2s ease-out forwards;
            }
        }
    }

    input {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 2;
        cursor: pointer;
        opacity: 0;

        &:checked {
            + svg {
                use {
                    &:nth-of-type(1) {
                        stroke-dashoffset: 175;
                        stroke-dasharray: 0 295;
                        opacity: 0;
                        transition: stroke-dashoffset 0.07s linear 0.07s,
                            stroke-dasharray 0.07s linear 0.07s,
                            opacity 0s linear 0.14s;
                    }
                    &:nth-of-type(2) {
                        animation: ${strokeAnimation} 1.2s ease-out forwards;
                    }
                }
            }
        }
    }
`;

export const ListItems = styled.ul`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    list-style: none;
    padding: ${({ theme }) => `${theme.spaces[3]}px`};

    @media screen and (min-width: 1000px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &#logo {
        display: none;

        @media screen and (min-width: 1000px) {
            display: initial;
        }
    }

    a,
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        flex-direction: column;
        text-align: center;
    }

    @media screen and (min-width: 800px) {
        margin: 16px 0;
        justify-content: flex-start;
        height: 5rem;

        &:last-child {
            margin-top: auto;
        }
    }

    strong {
        display: none;

        @media screen and (min-width: 1000px) {
            display: initial;
        }
    }

    svg,
    strong {
        transition: color 0.3s ease-in-out;
    }

    strong,
    a,
    button,
    svg {
        color: #999;
        font-weight: lighter;
        font-size: ${({ theme }) => theme.fontSizes['2xs']};
    }

    &:hover {
        svg,
        strong {
            color: ${({ theme }) => theme.colors.purple};
        }
    }

    ${({ active }) =>
        active &&
        css`
            strong,
            svg {
                color: ${({ theme }) => theme.colors.purple};
            }

            strong,
            a {
                font-weight: bold;
            }
        `}
`;

export const Logo = styled.h1`
    display: none;

    @media screen and (min-width: 1000px) {
        display: initial;
    }

    color: ${({ theme }) => theme.colors.yellow};
    border: 1px solid #eee;
    border-radius: 4px;

    font-family: 'Montserrat', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    text-align: center;
    padding: 0 10px;
`;
