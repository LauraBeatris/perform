import styled from 'styled-components';
import { darken } from 'polished';
import { color, fontSize, minWidth, minHeight, space } from 'styled-system';

export const StyledButton = styled.button`
    ${color}
    ${fontSize}
    ${space}

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0px 10px;
    min-width: 150px;
    min-height: 52px;
    ${minWidth}
    ${minHeight}

    text-align: center;

    border-radius: 10px;
    border: none;
    font-weight: bold;

    &:hover {
        background-color: ${({ theme, ...rest }) =>
            darken(0.2, theme.colors[rest.backgroundColor || 'purple'])}
    }
`;

export const Text = styled.span`
    justify-self: center;
    flex: 1;
`;
