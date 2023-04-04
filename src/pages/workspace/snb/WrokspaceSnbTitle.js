import {
  PlusOutlined,
  SearchOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentWorkspaceItem,
  addWorkspace,
} from "store/worksapce/WorkspaceActions";
import styled from "styled-components";

const TitleBtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleBtnTooltip = styled(Tooltip)`
  margin-left: 8px;
`;
const Container = styled.div`
  background-color: white;
  padding: 15px 10px 10px 23px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  border-right: 1px solid #efefef;
`;

const TitleText = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;

const TitleTextIcon = styled(AppstoreOutlined)`
  margin-right: 10px;
`;

const WrokspaceSnbTitle = () => {
  const currentWorkspaceItem = useSelector(
    (state) => state.workspace.currentWorkspaceItem
  );

  const dispatch = useDispatch();
  const onClickAddWorkspace = () => {
    const newWorksapceItem = {
      workspaceName: "New Workspace",
      workspaceId:
        currentWorkspaceItem.workspaceId + Math.floor(Math.random() * 100) + 7,
    };
    dispatch(addWorkspace(newWorksapceItem));
    dispatch(changeCurrentWorkspaceItem(newWorksapceItem));
  };

  return (
    <Container>
      <TitleText>
        <TitleTextIcon />
        <div>Workspace</div>
      </TitleText>
      <TitleBtnGroup>
        <TitleBtnTooltip title="Add Workspace">
          <Button
            shape="circle"
            size="small"
            icon={<PlusOutlined />}
            onClick={onClickAddWorkspace}
          />
        </TitleBtnTooltip>
        <TitleBtnTooltip title="Sheach Workspace">
          <Button shape="circle" size="small" icon={<SearchOutlined />} />
        </TitleBtnTooltip>
      </TitleBtnGroup>
    </Container>
  );
};

export default WrokspaceSnbTitle;
