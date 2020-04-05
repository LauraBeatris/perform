import styled, { css } from 'styled-components';

export const Container = styled.li`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    position: relative;
    padding: ${({ theme }) => `${theme.spaces[3]}px`};
    margin-bottom: ${({ theme }) => `${theme.spaces[2]}px`};
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.4);
    cursor: grab;

    header {
        position: absolute;
        top: -20px;
        left: 20px;
        min-height: 10px;
    }

    p {
        word-break: break-word;
        word-wrap: break-word;
        color: #192c3d;
        font-weight: 500;
        font-size: ${({ theme }) => theme.fontSizes['2xs']};
    }

    img {
        height: 24px;
        width: 24px;
        border-radius: 2px;
        margin-top: ${({ theme }) => `${theme.spaces[2]}px`};
    }

    ${({ isDragging }) =>
        isDragging &&
        css`
            border: 2px dashed rgba(0, 0, 0, 0.2);
            cursor: grabbing;
            background: transparent;
            box-shadow: none;
            border-radius: 0;
            padding-top: ${({ theme }) =>
                `${theme.spaces[3] +
                    18}px`}; /* 16px + 18px + 2px => 36px => Top Space */

            p,
            img,
            header {
                visibility: hidden;
            }
        `}
`;

export const Tag = styled.div`
    background-color: ${({ color }) => color};
    display: inline-block;
    height: 10px;
    width: 10px;
    margin-right: ${({ theme }) => `${theme.spaces[1]}px`};
    border-radius: 2px;
    position: relative;
`;
