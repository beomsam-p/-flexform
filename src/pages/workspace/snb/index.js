import React from "react";
import AccordionSnb from "./AccordionSnb";
import WorkspaceSnbItems from "./WorkspaceSnbItems";
import WrokspaceSnbTitle from "./WrokspaceSnbTitle";
import styled from "styled-components";

const WorkspaceSnbContainer = styled.div`
  height: calc(100vh - 54px);
  width: 17vw;
  min-width: 210px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
`;

const WorkspaceSnb = () => {
  return (
    <WorkspaceSnbContainer>
      <WrokspaceSnbTitle />
      <WorkspaceSnbItems />
      <AccordionSnb />
    </WorkspaceSnbContainer>
  );
};

export default WorkspaceSnb;
