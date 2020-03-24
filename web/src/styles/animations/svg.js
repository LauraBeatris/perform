import { keyframes } from 'styled-components';

/* All animations related to svg stuff */

export const strokeAnimation = keyframes`
    0% {
      stroke-dashoffset: 295;
      stroke-dasharray: 25 270;
    }
    50% {
      stroke-dashoffset: 68;
      stroke-dasharray: 59 236;
    }
    65% {
      stroke-dashoffset: 59;
      stroke-dasharray: 59 236;
    }
    100% {
      stroke-dashoffset: 68;
      stroke-dasharray: 59 236;
    }
  }

`;
export const strokeAnimationReverse = keyframes`
    0% {
      stroke-dashoffset: 68;
      stroke-dasharray: 59 236;
    }
    50% {
      stroke-dashoffset: 290;
      stroke-dasharray: 25 270;
    }
    65% {
      stroke-dashoffset: 295;
      stroke-dasharray: 25 270;
    }
    100% {
      stroke-dashoffset: 290;
      stroke-dasharray: 25 270;
    }
`;
