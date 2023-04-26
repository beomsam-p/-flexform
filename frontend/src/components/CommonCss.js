import styled, { css } from 'styled-components';

export const BoxCss = css`
  border: 1px solid rgba(200, 200, 200, 0.1);
  border-radius: 13px;
  box-shadow: rgba(200, 200, 200, 0.3) 2px 4px 10px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  width: 250px;
  height: 140px;
  padding: 0;
  background-color: rgba(250, 250, 250, 0.7);
  padding: 10px 20px;
  cursor: pointer;
  ${BoxCss}
`;
