import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentWorkspaceItem } from "store/worksapce/WorkspaceActions";
import { updateWorkspace } from "store/worksapce/WorkspaceActions";
import { deleteWorkspace } from "store/worksapce/WorkspaceActions";

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

const WorspaceNameArea = () => {
  const [worksapceNameVisible, setWorksapceNameVisible] = useState({
    titleVisible: true,
    titleInputvisible: false,
  });

  const currentWorkspaceItem = useSelector(
    (state) => state.workspace.currentWorkspaceItem
  );

  const dispatch = useDispatch();

  const workspaceNameInputRef = useRef(null);

  const [workspaceName, setWorkspaceName] = useState(
    currentWorkspaceItem.workspaceName
  );
  useEffect(() => {
    setWorkspaceName(currentWorkspaceItem.workspaceName);
  }, [currentWorkspaceItem]);

  const toggleWorksapceName = () => {
    setWorksapceNameVisible({
      titleVisible: !worksapceNameVisible.titleVisible,
      titleInputvisible: !worksapceNameVisible.titleInputvisible,
    });
  };

  const onBlurWorkspaceNameInput = () => {
    toggleWorksapceName();

    const worksapceTextValue = workspaceNameInputRef.current.value.trim();
    if (worksapceTextValue === "") {
      alert("빈값");
      workspaceNameInputRef.current.value = currentWorkspaceItem.workspaceName;
      return;
    }
    const newWorksapceItem = {
      ...currentWorkspaceItem,
      workspaceName: worksapceTextValue,
    };
    dispatch(changeCurrentWorkspaceItem(newWorksapceItem));
    dispatch(updateWorkspace(newWorksapceItem));
  };

  const keyDownWorkspaceInput = (e) => {
    if (e.keyCode === 13) {
      workspaceNameInputRef.current.blur();
    }
  };

  const clickWorkspaceDelete = () => {
    dispatch(deleteWorkspace(currentWorkspaceItem));
  };
  const onChangeWorkspaceInput = (e) => {
    setWorkspaceName(e.target.value);
  };

  return (
    <Container>
      <WorkspaceNameInputWaper>
        <Space.Compact>
          <WorkspaceNameInput
            ref={workspaceNameInputRef}
            value={workspaceName}
            onChange={onChangeWorkspaceInput}
            onBlur={onBlurWorkspaceNameInput}
            onKeyDown={keyDownWorkspaceInput}
          ></WorkspaceNameInput>
          <WorkspaceDeleteButton
            icon={<DeleteOutlined />}
            onClick={clickWorkspaceDelete}
          />
        </Space.Compact>
      </WorkspaceNameInputWaper>
    </Container>
  );
};

export default WorspaceNameArea;
