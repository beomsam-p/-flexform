import React from 'react';
import styled from 'styled-components';
const SurveyFormContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const SurveyFormContent = ({ children }) => {
  return <SurveyFormContentContainer>{children}</SurveyFormContentContainer>;
};

export default SurveyFormContent;
