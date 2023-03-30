import React from "react";
import SnbSurveyResultSnb from "./SurveyResultSnb";
import WorkspaceSnbItems from "./WorkspaceSnbItems";
import WrokspaceSnbTitle from "./WrokspaceSnbTitle";
import styled from "styled-components";

const WorkspaceSnbContainer = styled.div`
  height: calc(100vh - 54px);
  width: 17vw;
  min-width: 180px;
  border-right: 1px solid #f5f5f5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
`;

const WorkspaceSnb = () => {
  return (
    <WorkspaceSnbContainer>
      <WrokspaceSnbTitle />
      <WorkspaceSnbItems />
      <SnbSurveyResultSnb />
    </WorkspaceSnbContainer>
  );
};

export default WorkspaceSnb;
