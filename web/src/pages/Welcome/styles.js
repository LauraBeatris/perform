import styled from 'styled-components';
import { color, fontSize, layout, space } from 'styled-system';
import BackgroundDecoration from '~/assets/bg_decoration.png';

export const Container = styled.div.attrs({
    className: 'bg-welcome',
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
