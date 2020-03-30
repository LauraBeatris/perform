import styled from 'styled-components';
import Select from 'react-select'
import { Form } from '@unform/web';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

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

export const InviteForm = styled(Form)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    align-items: center;
    grid-gap: ${({ theme }) => `${theme.spaces[2]}px`};
    margin: ${({ theme }) => `${theme.spaces[2]}px`} 0px;

    @media screen and (min-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr 0.3fr;
        grid-template-rows: auto;
        align-items: center;
        grid-gap: ${({ theme }) => `${theme.spaces[2]}px`};
    }
`

export const MembersList = styled.ul`
    list-style: none;

    li {
        background: #eee;
        border-radius: 4px;
        color: ${({ theme }) => theme.colors['dark-secondary']};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: ${({ theme }) => `${theme.spaces[3]}px ${theme.spaces[2]}px`};

        @media screen and (min-width: 1000px) {
            flex-direction: row;
        }

        img {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            box-shadow: 1px 2px 6px -4px rgba(0, 0, 0, 0.7);
        }

        strong {
            margin: 0
                ${({ theme }) => `${theme.spaces[1]}px 0 ${theme.spaces[2]}px`};
        }

        small {
            color: ${({ theme }) => theme.colors.grayLight};
            font-weight: bold;
        }

        > .info {
            display: flex;
            align-items: center;
        }
    }

    li + li {
        margin-top: ${({ theme }) => `${theme.spaces[3]}px`};
    }
`;

export const StyledSelect = styled(Select)`
    margin-top: ${({ theme }) => `${theme.spaces[2]}px`};
    width: 100%;

    @media screen and (min-width: 1000px) {
        margin-top: 0;
        width: 50%;
    }
`
