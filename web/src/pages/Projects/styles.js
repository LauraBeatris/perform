import styled from 'styled-components';

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
    padding-top: ${({ theme }) => `${theme.spaces[3]}px`};

    @media screen and (min-width: 1000px) {
        align-items: center;
        flex-direction: row;
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: ${({ theme }) => `${theme.spaces[4]}px`};
    align-self: stretch;
    position: relative;

    button {
        margin-top: ${({ theme }) => `${theme.spaces[3]}px`};
    }

    input {
        width: 100%;
    }

    @media screen and (min-width: 1000px) {
        flex-direction: row;
        margin-top: 0;

        input {
            margin-right: ${({ theme }) => `${theme.spaces[2]}px`};
            margin-bottom: 0;
            width: initial;
        }

        button {
            margin-top: 0;
        }

        button + button {
            margin-left: ${({ theme }) => `${theme.spaces[2]}px`};
        }
    }
`;

export const InputWrapper = styled.div`
    position: relative;

    input {
        background: ${({ theme }) => theme.colors.white};
        border-radius: 4px;
        border: none;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: 400;
        padding: ${({ theme }) =>
            `${theme.spaces[2]}px 0 ${theme.spaces[2]}px 30px`};
        color: ${({ theme }) => theme.colors.grayLight};
        height: 100%;
    }

    svg {
        color: ${({ theme }) => theme.colors.grayLight};
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 5px;
    }
`;

export const Message = styled.h1`
    color: ${({ theme }) => theme.colors['dark-secondary']};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: bold;

    span {
        font-weight: 400;
    }

    small {
        font-size: ${({ theme }) => theme.fontSizes.md};
        color: ${({ theme }) => theme.colors.grayLight};
    }
`;

export const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme }) => `${theme.spaces[4]}px`};

    @media screen and (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: ${({ theme }) => `${theme.spaces[2]}px`};
    }

    @media screen and (min-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: ${({ theme }) => `${theme.spaces[4]}px`};
        align-items: center;
    }
`;

export const Project = styled.div`
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 2px 4px 6px -2px rgba(0, 0, 0, 0.7s);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: ${({ theme }) => `${theme.spaces[4]}px`};
    min-height: 300px;
    margin-bottom: ${({ theme }) => `${theme.spaces[4]}px`};

    @media screen and (min-width: 800px) {
        margin-bottom: 0;
    }
`;

export const ProjectHeader = styled.header`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors['dark-secondary']};
    padding-bottom: ${({ theme }) => `${theme.spaces[2]}px`};

    strong {
        font-size: ${({ theme }) => theme.fontSizes.md};
    }

    img {
        height: 124px;
        width: 124px;
        border-radius: 50%;
        margin: ${({ theme }) => `${theme.spaces[4]}px auto 0`};
    }

    p {
        text-overflow: hidden;
        font-weight: lighter;
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: lighter;
    margin: auto;
    text-align: center;
`;
