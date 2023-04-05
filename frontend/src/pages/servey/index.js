import React from "react";
import styled from "styled-components";
import SurveySnb from "./snb";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
`;
const SurveyContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
`;

const Servey = () => {
  return (
    <Container>
      <SurveySnb />
      <SurveyContent>servey</SurveyContent>;
    </Container>
  );
};

export default Servey;
