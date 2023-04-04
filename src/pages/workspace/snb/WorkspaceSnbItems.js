import styled from "styled-components";
import { Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentWorkspaceItem } from "store/worksapce/WorkspaceActions";

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

const WorkspaceSnbItems = () => {
  const dispatch = useDispatch();
  const workspace = useSelector((state) => state.workspace);
  const workspaceItems = workspace.workspaceItems;
  const currentSelectedWorksapce = workspace.currentWorkspaceItem;

  const menuItems = workspaceItems.map((workspaceItem) =>
    getItem(workspaceItem?.workspaceName, workspaceItem?.workspaceId)
  );
  const items = [getItem(null, "1", null, menuItems, "group")];

  const onClickWorkspaceItems = ({ key }) => {
    const newWorksapceItem = workspaceItems.find(
      ({ workspaceId }) => workspaceId === Number(key)
    );
    dispatch(changeCurrentWorkspaceItem(newWorksapceItem));
  };
  return (
    <Container>
      <WorkspaceItem
        selectedKeys={[currentSelectedWorksapce.workspaceId.toString()]}
        mode="inline"
        items={items}
        onClick={onClickWorkspaceItems}
      />
    </Container>
  );
};

export default WorkspaceSnbItems;
