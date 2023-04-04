import { useRef } from "react";
import styled from "styled-components";
import { Button, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { changeCurrentWorkspace } from "hooks/workspace/CurrentWorkspaceActions";
import { updateWorkspaceItem } from "hooks/workspace/WorkspaceItemsActions";
import { deleteWorkspaceItem } from "hooks/workspace/WorkspaceItemsActions";

const Container = styled.div`
  padding: 25px 40px;
`;

const WorkspaceNameInputWaper = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  & > * {
    width: 100%;
  }
`;

const WorkspaceNameInput = styled.textarea`
  height: 40px;
  width: 100%;
  padding: 9px 11px;
  font-size: 17px;
  border-radius: 8px 0 0 8px;
  border-right: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  background-color: #f8f8f8;
  overflow: hidden;
  resize: none;
  &:focus,
  &:hover {
    outline: none;
    border: 1px solid #4096ff;
  }
`;

const WorkspaceDeleteButton = styled(Button)`
  height: 100%;
  width: "40px";
  &span {
    font-size: "40px";
  }
`;

const WorspaceNameArea = ({
  workspaceItems,
  workspaceItemsDispatch,
  currentWorksapce,
  currentWorkspaceDispatch,
}) => {
  const workspaceNameInputRef = useRef(null);

  const onBlurWorkspaceNameInput = (e) => {
    const worksapceTextValue = e.target.value;
    if (worksapceTextValue === "" || worksapceTextValue.length > 20) {
      alert("빈값, 20글자 이상의 workspace name을 지정할 수 없음.");

      workspaceNameInputRef.current.value =
        workspaceItems[currentWorksapce.workspaceId].workspaceName;
      return;
    }

    const newWorksapceItem = {
      ...currentWorksapce,
      workspaceName: worksapceTextValue,
    };

    currentWorkspaceDispatch(changeCurrentWorkspace(newWorksapceItem));
    workspaceItemsDispatch(updateWorkspaceItem(newWorksapceItem));
  };

  const keyDownWorkspaceInput = (e) => {
    if (e.keyCode === 13) {
      workspaceNameInputRef.current.blur();
    }
  };

  const clickWorkspaceDelete = () => {
    const foundBefore = workspaceItems.find(
      (workspaceItem) => workspaceItem.order === currentWorksapce.order + 1
    );
    const beforeWorkspaceItem = foundBefore || workspaceItems[0];
    workspaceItemsDispatch(deleteWorkspaceItem(currentWorksapce));
    currentWorkspaceDispatch(changeCurrentWorkspace(beforeWorkspaceItem));
  };

  const onChangeWorkspaceInput = (e) => {
    const worksapceTextValue = e.target.value;
    const newWorksapceItem = {
      ...currentWorksapce,
      workspaceName: worksapceTextValue,
    };

    currentWorkspaceDispatch(changeCurrentWorkspace(newWorksapceItem));
  };

  return (
    <Container>
      <WorkspaceNameInputWaper>
        <Space.Compact>
          <WorkspaceNameInput
            ref={workspaceNameInputRef}
            value={currentWorksapce.workspaceName}
            onChange={onChangeWorkspaceInput}
            onBlur={onBlurWorkspaceNameInput}
            onKeyDown={keyDownWorkspaceInput}
          ></WorkspaceNameInput>
          <WorkspaceDeleteButton
            icon={<DeleteOutlined />}
            onClick={clickWorkspaceDelete}
            disabled={!currentWorksapce.deletable}
          />
        </Space.Compact>
      </WorkspaceNameInputWaper>
    </Container>
  );
};

export default WorspaceNameArea;
