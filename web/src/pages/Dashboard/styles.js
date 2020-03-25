import styled from 'styled-components';
import { shake } from '~/styles/animations';

export const Container = styled.div`
    @media screen and (min-width: 800px) {
        margin-left: 5rem;
    }
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
