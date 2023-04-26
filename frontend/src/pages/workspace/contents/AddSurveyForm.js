import React from 'react';
import styled from 'styled-components';

const AddSurveyFormContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SurveyTitle = styled.div`
  font-size: 14px;
`;

const AddSurveyForm = () => {
  return (
    <AddSurveyFormContainer>
      <SurveyTitle>설문 이름</SurveyTitle>
    </AddSurveyFormContainer>
  );
};

export default AddSurveyForm;
