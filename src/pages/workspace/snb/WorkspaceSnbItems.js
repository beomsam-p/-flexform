import styled from "styled-components";
import { Menu } from "antd";
import { changeCurrentWorkspace } from "hooks/workspace/CurrentWorkspaceActions";
import { useEffect } from "react";

const Container = styled.div`
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  overflow-y: auto;
  background-color: white;
`;

const WorkspaceItem = styled(Menu)`
  width: 100%;
  &.ant-menu .ant-menu-item-group-title {
    height: 0;
    padding: 0;
    margin: 0;
  }
  &.ant-menu-root.ant-menu-inline {
    border-inline-end: none;
  }
`;

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const WorkspaceSnbItems = ({
  workspaceItems,
  currentWorksapce,
  currentWorkspaceDispatch,
}) => {
  const menuItems = workspaceItems.map((workspaceItem) =>
    getItem(workspaceItem?.workspaceName, workspaceItem?.workspaceId)
  );
  const items = [getItem(null, "1", null, menuItems, "group")];

  const onClickWorkspaceItems = ({ key }) => {
    const newWorksapceItem = workspaceItems.find(
      ({ workspaceId }) => workspaceId === Number(key)
    );
    currentWorkspaceDispatch(changeCurrentWorkspace(newWorksapceItem));
  };

  useEffect(() => {
    console.log("바뀜!!");
  }, [workspaceItems]);

  return (
    <Container>
      <WorkspaceItem
        selectedKeys={[currentWorksapce.workspaceId.toString()]}
        mode="inline"
        items={items.sort((prev, next) => next.order - prev.order)}
        onClick={onClickWorkspaceItems}
      />
    </Container>
  );
};

export default WorkspaceSnbItems;
