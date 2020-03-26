import styled from 'styled-components';
import {
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
} from 'styled-system';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    display: flex;
`;

export const Container = styled.div`
    ${width}
    ${minWidth}
    ${maxWidth}
    ${height}
    ${minHeight}
    ${maxHeight};
    background: ${({ theme }) => theme.colors.white};
    margin: auto;
    border-radius: 4px;
    padding: ${({ theme }) => `${theme.spaces[3]}px ${theme.spaces[4]}px`}

`;
