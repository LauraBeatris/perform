import styled from 'styled-components';

import { strokeAnimation, strokeAnimationReverse } from '~/styles/animations/svg'

export const Container = styled.nav`
    display: flex;
    position: fixed;
    background: ${({theme}) => theme.colors.white};
    box-shadow: 1px 2px 4px -4px rgba(0, 0, 0, .7);
    transition: width .3s ease-in-out;

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

    strong {
        display: none;
    }

    &.expanded {
        width: 15rem;

        li {
            width: 150px;
        }

        strong {
            display: inline-block;
            margin-left: 8px;
            font-size: 18px;
            align-self: center;
            color: ${({theme}) => theme.colors['dark-secondary']};
            font-weight: bold;
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
        stroke: ${({theme}) => theme.colors.dark};
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
                transition: stroke-dashoffset .12s linear .2s, stroke-dasharray .12s linear .2s, opacity 0s linear .2s;
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
                        transition: stroke-dashoffset .07s linear .07s, stroke-dasharray .07s linear .07s, opacity 0s linear .14s;
                    }
                    &:nth-of-type(2) {
                        animation: ${strokeAnimation} 1.2s ease-out forwards;
                    }
                }
            }
        }
    }


`

export const ListItems = styled.ul`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    list-style: none;
    padding: ${({theme}) => theme.spaces[3] + 'px'};


    @media screen and (min-width: 800px) {
        flex-direction: column;
    }
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 800px) {
        margin: 16px 0;
        justify-content: flex-start;
        height: 5rem;

        &:last-child {
            margin-top: auto;
        }
    }

    svg {
        transition: unset;
    }
`

