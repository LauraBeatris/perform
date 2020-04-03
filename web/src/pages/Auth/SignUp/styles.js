import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
`;

export const InvitedTeam = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    box-shadow: 1px 6px 6px -4px rgba(0, 0, 0, 0.5);
    padding: ${({ theme }) => `${theme.spaces[3]}px`};
    margin: auto auto ${({ theme }) => `${theme.spaces[3]}px`};
    font-size: ${({ theme }) => theme.fontSizes.sm};

    display: flex;
    align-items: center;
    max-width: 321px;

    img {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        box-shadow: 1px 6px -2px rgba(0, 0, 0, 0.7);
        margin-right: ${({ theme }) => `${theme.spaces[2]}px`};
    }

    strong {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.purple};
    }
`;
