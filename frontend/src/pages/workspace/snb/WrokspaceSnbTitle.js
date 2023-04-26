import { PlusOutlined, SearchOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import useAxios from 'hooks/axios/UseAxios';
import styled from 'styled-components';

const TitleBtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleBtnTooltip = styled(Tooltip)`
  margin-left: 8px;
`;
const Container = styled.div`
  background-color: var(--backgound-color-white);
  padding: 15px 10px 10px 23px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const TitleText = styled.div`
  font-size: 16px;
  color: var(--font-color-default);
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;

const TitleTextIcon = styled(AppstoreOutlined)`
  margin-right: 10px;
`;

const WrokspaceSnbTitle = ({ workspaces, isLoading, isError, refetch: workspacesRefetch }) => {
  const url = '/v1/workspaces';
  const method = 'post';
  const [_, postExcute] = useAxios({ url, method }, { menual: true });
  const onClickAddWorkspace = async () => {
    const newWorksapceItem = {
      workspace_name: 'New Workspace',
      workspace_order: workspaces.at(-1)?.workspaceOrder + 1,
    };
    await postExcute(newWorksapceItem);
    workspacesRefetch();
  };

  return (
    <Container>
      <TitleText>
        <TitleTextIcon />
        <div>Workspace</div>
      </TitleText>
      <TitleBtnGroup>
        <TitleBtnTooltip title="Add Workspace">
          <Button shape="circle" size="small" icon={<PlusOutlined />} onClick={onClickAddWorkspace} />
        </TitleBtnTooltip>
        <TitleBtnTooltip title="Sheach Workspace">
          <Button shape="circle" size="small" icon={<SearchOutlined />} disabled={isLoading | isError} />
        </TitleBtnTooltip>
      </TitleBtnGroup>
    </Container>
  );
};

export default WrokspaceSnbTitle;
