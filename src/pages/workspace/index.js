import WorkspaceSnb from "pages/workspace/snb";
import WorksapceContent from "pages/workspace/WorspaceContent";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
`;

const Workspace = () => {
  return (
    <Container>
      <WorkspaceSnb />
      <WorksapceContent />
    </Container>
  );
};

export default Workspace;
