import styled from "styled-components";

const Container = styled.div`
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  overflow-y: auto;
  background-color: white;
  padding: 0 5px 0 5px;
`;

const WorkspaceItem = styled.div`
  &:before {
    content: "${({ textContent }) => textContent}";
  }
  padding: 11px 25px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.88);
  border-radius: 8px;
  :hover {
    background-color: #f5f5f5;
  }
`;

const WorkspaceSnbItems = () => {
  return (
    <Container>
      <WorkspaceItem textContent={"Workspace1"} />
      <WorkspaceItem textContent={"Workspace2"} />
      <WorkspaceItem textContent={"Workspace3"} />
      <WorkspaceItem textContent={"Workspace4"} />
      <WorkspaceItem textContent={"Workspace5"} />
      <WorkspaceItem textContent={"Workspace6"} />
      <WorkspaceItem textContent={"Workspace7"} />
      <WorkspaceItem textContent={"Workspace8"} />
      <WorkspaceItem textContent={"Workspace9"} />
      <WorkspaceItem textContent={"Workspace10"} />
      <WorkspaceItem textContent={"Workspace1"} />
      <WorkspaceItem textContent={"Workspace2"} />
      <WorkspaceItem textContent={"Workspace3"} />
      <WorkspaceItem textContent={"Workspace4"} />
      <WorkspaceItem textContent={"Workspace5"} />
      <WorkspaceItem textContent={"Workspace6"} />
      <WorkspaceItem textContent={"Workspace7"} />
      <WorkspaceItem textContent={"Workspace8"} />
      <WorkspaceItem textContent={"Workspace9"} />
      <WorkspaceItem textContent={"Workspace10"} />
    </Container>
  );
};

export default WorkspaceSnbItems;
