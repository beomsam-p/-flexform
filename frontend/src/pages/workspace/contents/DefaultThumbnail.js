import React from 'react';
import styled, { css } from 'styled-components';
import { PlusCircleFilled } from '@ant-design/icons';

const ThumbnailBoxCss = css`
  border: 2px solid rgba(200, 200, 200, 0.3);
  border-radius: 18px;
  box-shadow: rgba(200, 200, 200, 0.2) 2px 4px 10px;
  margin-bottom: 30px;
  cursor: pointer;
`;

const DefaultThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 265px;
  height: 140px;
  padding: 0;
  background-color: rgba(250, 250, 250, 0.7);

  ${ThumbnailBoxCss}
`;
const SurveyThumbnailAddButton = styled(PlusCircleFilled)`
  font-size: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #4096ff;
  }
  color: rgba(0, 0, 0, 0.3);
`;
const DefaultThumbnail = () => {
  return (
    <DefaultThumbnailContainer>
      <SurveyThumbnailAddButton />
    </DefaultThumbnailContainer>
  );
};

export default DefaultThumbnail;
