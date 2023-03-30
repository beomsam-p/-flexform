import styled from "styled-components";
import { Menu } from "antd";

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

const WorkspaceSnbItems = () => {
  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };
  const items = [
    getItem(
      null,
      "1",
      null,
      [
        getItem("Workspace1", "sub1"),
        getItem("Workspace2", "sub2"),
        getItem("Workspace3", "sub3"),
        getItem("Workspace4", "sub4"),
        getItem("Workspace5", "sub5"),
        getItem("Workspace6", "sub6"),
      ],
      "group"
    ),
  ];
  return (
    <Container>
      <WorkspaceItem
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </Container>
  );
};

export default WorkspaceSnbItems;
