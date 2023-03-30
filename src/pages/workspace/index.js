import WorkspaceSnb from "pages/workspace/snb";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
`;

const WorkspaceContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
`;

const Workspace = () => {
  return (
    <Container>
      <WorkspaceSnb />
      <WorkspaceContent>
        <h1>Workspace1</h1>
      </WorkspaceContent>
    </Container>
  );
};

export default Workspace;
