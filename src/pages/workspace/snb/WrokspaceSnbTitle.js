import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import styled from "styled-components";

const TitleBtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleBtnTooltip = styled(Tooltip)`
  margin-left: 8px;
`;
const Title = styled.div`
  background-color: white;
  padding: 15px 10px 10px 20px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.88);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const SnbWrokspaceTitle = () => {
  return (
    <Title>
      <div>Workspace</div>
      <TitleBtnGroup>
        <TitleBtnTooltip title="Add Workspace">
          <Button shape="circle" size="small" icon={<PlusOutlined />} />
        </TitleBtnTooltip>
        <TitleBtnTooltip title="Sheach Workspace">
          <Button shape="circle" size="small" icon={<SearchOutlined />} />
        </TitleBtnTooltip>
      </TitleBtnGroup>
    </Title>
  );
};

export default SnbWrokspaceTitle;
