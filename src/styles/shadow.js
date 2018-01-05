import { css } from 'react-emotion';

const levelStep = 0.125;

const shadow = ({ level, spread, color }) => css`
  box-shadow: ${level * levelStep}rem ${level * levelStep}rem ${(spread || level) * levelStep}rem
    ${color};
`;

export default shadow;
