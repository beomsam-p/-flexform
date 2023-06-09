import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Skeleton, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { changeCurrentWorkspace } from 'hooks/workspace/CurrentWorkspaceActions';
import useAxios from 'hooks/axios/UseAxios';
import { toSnakeCase } from 'util/ConvertConvention';
import { InputCss } from 'components/CommonCss';
import { toast } from 'react-toastify';

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
  ${InputCss}
`;

const WorkspaceDeleteButton = styled(Button)`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-left: 10px;
  border: 2px solid var(--border-color-gray);
  z-index: 0;

  &.ant-btn {
    font-size: 17px;
    color: var(--border-color-dark-gray);
    width: 40px;
    &:hover {
      border: 2px solid var(--border-color-hover);
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
  const [, patchExcute] = useAxios({ url, method: patchMethod }, { menual: true });
  const [, deleteExcute] = useAxios({ url, method: deleteMethod }, { menual: true });

  const workspaceNameOrUndefined = currentWorkspace?.workspaceName;
  const [workspaceName, setWorkspaceName] = useState(workspaceNameOrUndefined);
  useEffect(() => {
    if (workspaceNameOrUndefined) setWorkspaceName(workspaceNameOrUndefined);
  }, [workspaceNameOrUndefined]);

  const resetWorkspaceName = () => {
    workspaceNameInputRef.current.value = workspaces.find(
      workspace => workspace.workspaceId === currentWorkspace.workspaceId,
    ).workspaceName;
  };

  const validWorkspaceName = () => {
    if (workspaceName === '') {
      resetWorkspaceName();
      toast.warn('워크 스페이스 이름을 입력해주세요.');
      return false;
    }

    if (workspaceName === currentWorkspace.workspaceName) {
      return false;
    }
    return true;
  };

  const onBlurWorkspaceNameInput = async e => {
    if (!validWorkspaceName()) {
      return;
    }

    const updatedWorksapceItem = {
      ...currentWorkspace,
      workspaceName,
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
    setWorkspaceName(e.target.value);
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
              value={workspaceName}
              onChange={onChangeWorkspaceInput}
              onBlur={onBlurWorkspaceNameInput}
              onKeyDown={keyDownWorkspaceInput}
              maxLength={50}
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
