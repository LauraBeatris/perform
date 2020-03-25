import styled from 'styled-components';
import { shake } from '~/styles/animations';

export const Container = styled.div`
    min-width: 100%;
    min-height: 100%;

    display: flex;
    flex-direction: column;
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
