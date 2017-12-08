import { css } from 'react-emotion';

export const flex = css`
  display: flex;
`;

export const flexDirectionRow = css`
  ${flex} flex-direction: row;
`;

export const flexDirectionColumn = css`
  ${flex} flex-direction: column;
`;

export const justifyContentStart = css`
  justify-content: flex-start;
`;

export const justifyContentCenter = css`
  justify-content: center;
`;

export const justifyContentEnd = css`
  justify-content: flex-end;
`;

export const alignItemsStart = css`
  align-items: flex-start;
`;

export const alignItemsCenter = css`
  align-items: center;
`;

export const alignItemsEnd = css`
  align-items: flex-end;
`;
