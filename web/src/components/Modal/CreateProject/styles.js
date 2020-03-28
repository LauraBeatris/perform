import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledForm = styled(Form)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    height: 100%;

    label {
        color: ${({ theme }) => theme.colors.grayLight};
        margin-bottom: ${({ theme }) => `${theme.spaces[2]}px`};
    }

    .actions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: auto;
        padding-top: ${({ theme }) => `${theme.spaces[3]}px`};

        button + button {
            margin-top: ${({ theme }) => `${theme.spaces[2]}px`};
        }

        @media screen and (min-width: 1000px) {
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;

            button + button {
                margin-left: ${({ theme }) => `${theme.spaces[2]}px`};
                margin-top: 0;
            }
        }
    }
`;

export const Header = styled.header`
    h1 {
        text-align: center;
        color: ${({ theme }) => theme.colors['dark-secondary']};
        font-weight: 400;
    }

    padding-bottom: ${({ theme }) => `${theme.spaces[1]}px`};
    border-bottom: 2px solid #eee;
    margin-bottom: ${({ theme }) => `${theme.spaces[4]}px`};
`;
