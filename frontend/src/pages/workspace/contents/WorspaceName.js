import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button, Skeleton, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { changeCurrentWorkspace } from 'hooks/workspace/CurrentWorkspaceActions';
import { updateWorkspaceItem } from 'hooks/workspace/WorkspaceItemsActions';
import { deleteWorkspaceItem } from 'hooks/workspace/WorkspaceItemsActions';
import useAxios from 'hooks/axios/UseAxios';
import { toSnakeCase } from 'util/ConvertConvention';

const WorkspaceNameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  & > * {
    width: 100%;
  }
`;

const WorkspaceNameInput = styled.textarea`
  height: 55px;
  width: 100%;
  min-width: 350px;
  padding: 7px 11px;
  font-size: 32px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border-right: 0;
  border: 1px solid white;
  box-sizing: border-box;
  overflow: hidden;
  resize: none;
  &:focus {
    border: 2px solid #4096ff;
    background-color: rgba(0, 0, 0, 0.01);
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    outline: none;
  }
`;

const WorkspaceDeleteButton = styled(Button)`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-left: 10px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  z-index: 0;

  &.ant-btn {
    font-size: 17px;
    color: rgba(0, 0, 0, 0.8);
    width: 40px;
    &:hover {
      border: 2px solid #4096ff;
    }
    z-index: 0;
  }
  &.ant-btn-compact-item.ant-btn-compact-last-item {
    border-radius: 55px;
  }
`;

const WorkspaceNameSkeletons = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
  width: 100%;
  padding: 4px;
  & span {
    margin-bottom: 10px;
  }
`;

const WorspaceName = ({
  workspaces,
  isLoading,
  isError,
  refetch: workspacesRefetch,
  currentWorkspace,
  currentWorkspaceDispatch,
}) => {
  const workspaceNameInputRef = useRef(null);
  const url = `/v1/workspaces/${currentWorkspace?.workspaceId}`;
  const patchMethod = 'patch';
  const deleteMethod = 'delete';
  const [_, patchExcute] = useAxios({ url, method: patchMethod }, { menual: true });
  const [__, deleteExcute] = useAxios({ url, method: deleteMethod }, { menual: true });

  const onBlurWorkspaceNameInput = async e => {
    const worksapceTextValue = e.target.value;
    if (worksapceTextValue === '' || worksapceTextValue.length > 20) {
      alert('빈값, 20글자 이상의 workspace name을 지정할 수 없음.');

      workspaceNameInputRef.current.value = workspaces.find(
        workspace => workspace.workspaceId === currentWorkspace.workspaceId,
      ).workspaceName;
      return;
    }

    const updatedWorksapceItem = {
      ...currentWorkspace,
      workspaceName: worksapceTextValue,
    };

    currentWorkspaceDispatch(changeCurrentWorkspace(updatedWorksapceItem));
    await patchExcute(toSnakeCase(updatedWorksapceItem));
    workspacesRefetch();
  };

  const keyDownWorkspaceInput = e => {
    if (e.keyCode === 13) {
      workspaceNameInputRef.current.blur();
    }
  };

  const clickWorkspaceDelete = async () => {
    const currentIndex = workspaces.findIndex(workspace => workspace.workspaceId === currentWorkspace.workspaceId);
    const beforIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
    const beforeWorkspaceItem = workspaces[beforIndex];
    await deleteExcute();
    await workspacesRefetch();
    currentWorkspaceDispatch(changeCurrentWorkspace(beforeWorkspaceItem));
  };

  const onChangeWorkspaceInput = e => {
    const worksapceTextValue = e.target.value;

    const newWorksapceItem = {
      ...currentWorkspace,
      workspaceName: worksapceTextValue,
    };

    currentWorkspaceDispatch(changeCurrentWorkspace(newWorksapceItem));
  };

  return (
    <WorkspaceNameContainer>
      <Space.Compact>
        {isLoading || isError ? (
          <WorkspaceNameSkeletons isLoading={isLoading || isError}>
            <Skeleton.Button active={true} block={true} />
          </WorkspaceNameSkeletons>
        ) : (
          <>
            <WorkspaceNameInput
              ref={workspaceNameInputRef}
              value={currentWorkspace?.workspaceName}
              onChange={onChangeWorkspaceInput}
              onBlur={onBlurWorkspaceNameInput}
              onKeyDown={keyDownWorkspaceInput}
            ></WorkspaceNameInput>
            <WorkspaceDeleteButton
              icon={<DeleteOutlined />}
              onClick={clickWorkspaceDelete}
              disabled={!currentWorkspace?.deletable}
            />
          </>
        )}
      </Space.Compact>
    </WorkspaceNameContainer>
  );
};

export default WorspaceName;
