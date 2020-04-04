import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, fontSize, layout, space } from 'styled-system';
import BackgroundDecoration from '~/assets/bg_decoration.png';

export const Container = styled.div.attrs({
    className: 'bg-signin',
})`
    ${color}
    ${space}
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    background-image: url(${BackgroundDecoration});
`;

export const Content = styled.div`
    margin: auto;
    max-width: 321px;
`;

export const Title = styled.h1`
    ${color}
    ${fontSize}
    ${layout}
    ${space}
`;

export const Text = styled.p`
    ${color}
    ${fontSize}
    ${layout}
    ${space}
    opacity: 0.79;
    font-weight: 500;
    line-height: 28px;
`;

export const Back = styled(Link)`
    color: white;
    position: absolute;
    right: 24px;
    top: 16px;
    font-weight: bold;
    text-decoration: none;

    font-size: ${({ theme }) => theme.fontSizes.md};

    display: flex;
    align-items: center;

    svg {
        margin-right: 4px;
    }

    transition: transform 0.5s ease;

    &:hover {
        transform: translateX(-10px);
        background-color: ;
    }
`;

export const Links = styled.ul`
    ${space}
`;

export const LinkItem = styled.li`
    font-size: ${({ theme }) => theme.fontSizes['2xs']};
    font-weight: 400;
    text-transform: lowercase;

    a {
        text-decoration: none;
        ${color}

        &:hover {
            text-decoration: underline;
        }
    }
`;
