import styled from 'styled-components';
import { IoMdNotificationsOutline } from 'react-icons/io';

export const Container = styled.header`
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => `${theme.spaces[4]}px`};
    z-index: 10;

    nav {
        margin-left: auto;
        display: flex;
        align-items: center;
    }

    @media screen and (min-width: 1000px) {
        padding: ${({ theme }) => `${theme.spaces[4]}px 5rem`};
    }
`;

export const NotificationWrapper = styled.div`
    position: relative;
`;

export const Notification = styled(IoMdNotificationsOutline)`
    color: ${({ theme }) => theme.colors['dark-secondary']};
    font-size: ${({ theme }) => theme.fontSizes.lg};

    display: flex;
    align-items: center;
`;

export const Badge = styled.span`
    background: ${({ theme }) => theme.colors.warning};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: -5px;
    top: -5px;
    width: 24px;
    height: 24px;
    border: 3px solid #eee;
    box-sizing: content-box;
`;

export const ProfileButton = styled.button`
    background: none;
    display: flex;
    border: none;
    margin-left: 24px;
    align-items: center;
    margin-bottom: 5px;

    img#user {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }

    img#dots {
        height: 16px;
    }

    img + img {
        margin-left: 8px;
    }
`;
