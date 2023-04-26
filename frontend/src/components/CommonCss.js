import styled, { css } from 'styled-components';

export const BoxCss = css`
  border: 1px solid rgba(200, 200, 200, 0.1);
  border-radius: 13px;
  box-shadow: rgba(200, 200, 200, 0.3) 2px 4px 10px;
`;

export const InputCss = css`
  color: var(--font-color-default);
  border-radius: 14px;
  border-right: 0;
  border: 1px solid var(--border-color-white);
  box-sizing: border-box;
  resize: none;
  overflow: hidden;
  white-space: nowrap;
  &:focus {
    border: 2px solid var(--primary-color);
    background-color: var(--backgound-color-light-gray);
    outline: none;
  }
  &:hover {
    background-color: var(--backgound-color-light-gray);
    outline: none;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  width: 250px;
  height: 140px;
  padding: 0;
  background-color: rgba(250, 250, 250, 0.7);
  padding: 10px 20px;
  cursor: pointer;
  ${BoxCss}
`;
export const LabelContainer = styled.div`
  width: 35px;
  height: 35px;
  margin: 0 10px;
`;
export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  background-color: ${({ labelColor }) => labelColor};
  border-radius: 40px;
  height: 100%;
  width: 100%;
`;
export const Badge = styled.div`
  font-size: 25px;
`;
