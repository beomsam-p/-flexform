import React from 'react';
import styled from 'styled-components';
const SurveyFormTitleContainer = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: var(--font-color-light-gray);
`;
const SurveyFormTitle = ({ children }) => {
  return <SurveyFormTitleContainer>{children}</SurveyFormTitleContainer>;
};

export default SurveyFormTitle;
