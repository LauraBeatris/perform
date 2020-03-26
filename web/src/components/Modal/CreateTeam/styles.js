import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    height: 100%;
    flex: 1;

    label {
        color: ${({ theme }) => theme.colors.grayLight};
        margin-bottom: ${({ theme }) => `${theme.spaces[2]}px`};
    }

    .actions {
        display: inherit;
        flex-direction: column;
        margin-top: auto;

        button + button {
            margin-top: ${({ theme }) => `${theme.spaces[2]}px`};
        }
    }
`;

export const Header = styled.header`
    h1 {
        text-align: center;
        color: ${({ theme }) => theme.colors['dark-secondary']};
        font-weight: bold;
        padding-bottom: ${({ theme }) => `${theme.spaces[1]}px`};
        border-bottom: 2px solid #eee;
        margin-bottom: ${({ theme }) => `${theme.spaces[2]}px`};
    }
`;
