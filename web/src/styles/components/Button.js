import styled from 'styled-components';
import { color, fontSize } from 'styled-system';

export const StyledButton = styled.button`
    ${color}
    ${fontSize}

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 10px;
    min-width: 150px;
    min-height: 52px;
    border-radius: 10px;
    border: none;
    font-weight: bold;
`;

export const Text = styled.span`
    justify-self: center;
    flex: 1;
`;
