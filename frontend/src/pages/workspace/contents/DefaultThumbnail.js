import React from 'react';
import styled from 'styled-components';
import { PlusCircleFilled } from '@ant-design/icons';
import { ThumbnailContainer } from './ThumbnailCss';

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
    <ThumbnailContainer>
      <SurveyThumbnailAddButton />
    </ThumbnailContainer>
  );
};

export default DefaultThumbnail;
