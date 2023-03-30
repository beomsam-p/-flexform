import React from "react";
import SnbSurveyResult from "./SnbSurveyResult";
import SnbWorkspace from "./SnbWorkspace";
import SnbWrokspaceTitle from "./SnbWrokspaceTitle";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #f5f5f5;
`;

const Snb = () => {
  return (
    <Container>
      <>
        <SnbWrokspaceTitle />
        <SnbWorkspace />
        <SnbSurveyResult />
      </>
    </Container>
  );
};

export default Snb;
