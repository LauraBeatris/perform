import styled from 'styled-components';
import { fontSize, color, space, textAlign } from 'styled-system';
import { Link } from 'react-router-dom';
import { shake } from '~/styles/animations';

export const Container = styled.div`
    min-width: 100%;
    min-height: 100%;

    display: flex;
    flex-direction: column;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (min-width: 1000px) {
        align-items: center;
        flex-direction: row;
    }
`;

export const Text = styled.p`
    ${fontSize}
    ${color}
    ${space}
    ${textAlign}
    font-weight: lighter;
    max-width: 500px;
`;

export const Message = styled.h1`
    color: ${({ theme }) => theme.colors['dark-secondary']};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: bold;

    span {
        font-weight: 400;
    }

    span #emoji {
        display: inline-block;
        animation-name: ${shake};
        animation-duration: 0.8s;
        animation-iteration-count: 3;
        animation-fill-mode: forwards;
    }
`;

export const Options = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    ${space}
    ${color}
    ${fontSize}
    ${textAlign}
    border: none;
    position: relative;
    transition: transform .2s;
    font-weight: bold;
    text-decoration: none;

    &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 0;
        background-color: ${({ theme, ...rest }) =>
            theme.colors[rest.color] || '#eee'};
        bottom: -2px;
        left: 0;
        transition: width .4s;
        opacity: 0.5;
    }

    &:hover::after {
        width: 100%;
    }

    &:active {
        transform: translateY(-5px);
    }
`;
