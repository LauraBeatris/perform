import { keyframes } from 'styled-components';

export const shake = keyframes`
    0% {
        transform: rotate(0);
    }

    50% {
        transform: rotate(-30deg);
    }

    100% {
        transform: rotate(0deg)
    }
`;

export const grow = width => keyframes`
    from {
        width: 0%;
    }

    to {
        width: ${width}
    }
`;

export const fadein = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;
