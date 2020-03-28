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
        padding-top: 0;
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: ${({ theme }) => `${theme.spaces[4]}px`};

    button {
        margin-top: ${({ theme }) => `${theme.spaces[3]}px`};
    }

    @media screen and (min-width: 1000px) {
        flex-direction: row;
        margin-top: 0;

        input {
            margin-right: ${({ theme }) => `${theme.spaces[2]}px`};
        }

        button {
            margin-top: 0;
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
        max-width: 100%;
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
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }

    img {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        margin: auto;
        margin: ${({ theme }) => `${theme.spaces[2]}px auto`};
    }

    p {
        text-overflow: hidden;
        font-weight: lighter;
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }
`;

export const ProjectMembers = styled.div`
    margin-top: auto;

    img {
        height: 32px;
        width: 32px;
        border-radius: 50%;
        box-shadow: 1px 4px 6px -4px rgba(0, 0, 0, 0.4);
        position: relative;

        &:not(:last-child) {
            margin-right: ${({ theme }) => `${theme.spaces[1]}px`};
        }

        &#owner::before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            border: 1px solid ${({ theme }) => theme.colors.grayLight};
            background: inherit;
            top: 0;
            left: 0;
        }
    }
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: lighter;
    margin: auto;
    text-align: center;
`;
