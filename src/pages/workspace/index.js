import WorkspaceSnb from "pages/workspace/snb";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: beige;
  display: grid;
  grid-template-columns: auto 1fr;
`;

const Workspace = () => {
  return (
    <Container>
      <WorkspaceSnb />
      <div>workspace</div>
    </Container>
  );
};

export default Workspace;
