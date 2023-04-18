import React from 'react';
import styled from 'styled-components';
import SurveySnbTitle from './SurveySnbTitle';
const SurveySnbContainer = styled.div`
  height: calc(100vh - 54px);
  width: 17vw;
  min-width: 210px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
`;

const SurveySnb = () => {
  return (
    <SurveySnbContainer>
      <SurveySnbTitle />
    </SurveySnbContainer>
  );
};

export default SurveySnb;
