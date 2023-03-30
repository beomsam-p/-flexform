import styled from "styled-components";

const WorkspaceSnbArea = styled.div`
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  flex-grow: 1;
  overflow-y: auto;
  height: 0px;
`;

const Items = styled.div`
  background-color: white;
  padding: 0 5px 0 5px;
`;

const Item = styled.div`
  padding: 11px 25px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.88);
  border-radius: 8px;
  :hover {
    background-color: #f5f5f5;
  }
`;

const WorkspaceSnb = () => {
  return (
    <WorkspaceSnbArea className="workspace_snb_area">
      <Items>
        <Item>Workspace1</Item>
        <Item>Workspace2</Item>
        <Item>Workspace3</Item>
        <Item>Workspace1</Item>
        <Item>Workspace2</Item>
      </Items>
    </WorkspaceSnbArea>
  );
};

export default WorkspaceSnb;
