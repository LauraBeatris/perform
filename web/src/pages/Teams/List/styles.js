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

    p {
        margin-top: 8px;
    }

    @media screen and (min-width: 1000px) {
        flex-direction: row;

        p {
            margin-top: 0;
        }
    }
`;

export const Message = styled.h1`
    color: ${({ theme }) => theme.colors['dark-secondary']};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: bold;

    span {
        font-weight: 400;
    }
`;
