import styled, { css } from 'styled-components';
import { color, space } from 'styled-system';
import BackgroundDecoration from '~/assets/bg_decoration.png';

const containerTypes = {
    withDecoration: css`
        background-image: url(${BackgroundDecoration});
        background-repeat: no-repeat;
        background-size: cover;
    `,
    solid: css`
        background-color: ${({ theme }) => theme.colors.purple};
    `,
};

const Container = styled.div.attrs({
    className: 'bg-welcome',
})`
    ${color}
    ${space}
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    ${props => containerTypes[props.type || 'default']}
`;

export default Container;
