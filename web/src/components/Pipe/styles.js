import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    flex: 0 0 320px;
    height: 100%;
    padding: 0 ${({ theme }) => `${theme.spaces[3]}px`} 0px 0px;
    ${({ done }) =>
        done &&
        css`
            ul li {
                opacity: 0.6;
            }
        `}

    & + div {
        border-left: 2px solid rgba(0, 0, 0, 0.05);
        padding: 0 ${({ theme }) => `${theme.spaces[3]}px`};
    }

    > header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;

        div {
            max-width: 222px;

            h2,
            small {
                font-weight: 500;
                padding: 0 10px 0 0;
            }

            h2 {
                color: ${({ theme }) => theme.colors['dark-secondary']};
                font-weight: 600;
                line-height: 20px;
                max-width: 210px;
                font-size: ${({ theme }) => theme.fontSizes['2xs']};
                cursor: pointer;
                text-overflow: ellipsis;
                overflow: hidden;

                &:hover {
                    color: ${({ theme }) => theme.colors.purple};
                }
            }

            small {
                color: ${({ theme }) => theme.colors.graySecondary};
            }
        }

        button {
            background: ${({ theme }) => theme.colors.purple};
            border: none;
            border-radius: 50%;
            height: 42px;
            width: 42px;
            color: #fff;

            &:hover {
                background: ${({ theme }) => darken(0.08, theme.colors.purple)};
            }
        }
    }

    ul {
        margin-top: ${({ theme }) => `${theme.spaces[4]}px`};
    }
`;
