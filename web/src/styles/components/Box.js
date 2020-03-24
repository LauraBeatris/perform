import styled from 'styled-components';
import { color, space, display, alignItems } from 'styled-system';

const Container = styled.div`
    ${color}
    ${space}
    ${display}
    ${alignItems}
    border-radius: 4px;
    box-shadow: 1px 2px 4px -4px rgba(0, 0, 0, .7);
`;

export default Container;
