import { css } from 'react-emotion';

const round = ({ roundLevel }) => css`
  border-radius: ${roundLevel}rem;
`;

export default round;
