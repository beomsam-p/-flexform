import styled from 'styled-components';
import { Menu, Skeleton } from 'antd';
import { changeCurrentWorkspace } from 'hooks/workspace/CurrentWorkspaceActions';
import { useEffect, useReducer } from 'react';
import useAxios from 'hooks/axios/UseAxios';
import { handleApiException } from 'exception/ApiException';
import workspaceItemsReducer from 'hooks/workspace/WorkspaceItemsReducer';
import currentWorkspaceReducer from 'hooks/workspace/CurrentWorkspaceReducer';

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

const WorkspaceItemSkeletons = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
  padding: 4px;
  & span {
    margin-bottom: 10px;
  }
`;

const convertItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const convertItems = workspaces => {
  const menuItems = workspaces.map(workspaceItem =>
    convertItem(workspaceItem?.workspaceName, workspaceItem?.workspaceId),
  );
  return [convertItem(null, '1', null, menuItems, 'group')];
};

const WorkspaceSnbItems = ({ workspaces, isLoading, isError, currentWorkspace, currentWorkspaceDispatch }) => {
  const onClickWorkspaceItems = ({ key }) => {
    const newWorksapceItem = workspaces.find(({ workspaceId }) => workspaceId === key);
    currentWorkspaceDispatch(changeCurrentWorkspace(newWorksapceItem));
  };

  return (
    <Container>
      {isLoading || isError ? (
        <WorkspaceItemSkeletons isLoading={isLoading || isError}>
          <Skeleton.Button active={true} block={true} />
          <Skeleton.Button active={true} block={true} />
          <Skeleton.Button active={true} block={true} />
        </WorkspaceItemSkeletons>
      ) : (
        <WorkspaceItem
          selectedKeys={[currentWorkspace?.workspaceId?.toString()]}
          mode="inline"
          items={convertItems(workspaces).sort((prev, next) => next.order - prev.order)}
          onClick={onClickWorkspaceItems}
        />
      )}
    </Container>
  );
};

export default WorkspaceSnbItems;
