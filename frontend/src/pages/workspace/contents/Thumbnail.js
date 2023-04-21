import React from 'react';
import { ThumbnailContainer } from './ThumbnailCss';
import styled from 'styled-components';
import { MoreOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const ThumbnailContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const ThumbnailHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${({ labelColor }) => labelColor};
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;
const Badge = styled.div`
  font-size: 29px;
`;
const MoreButton = styled(Button)`
  &.ant-btn {
    border-radius: 20px;
    border: 0;
    background-color: rgba(0, 0, 0, 0.02);
  }
  & svg {
    transform: rotate(90deg);
  }
`;

const ThumbnailBody = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const SurveyName = styled.div`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 25px;
`;

const ThumbnailTail = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ResponseCount = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-bottom: 10px;
`;

const UpdateDate = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: right;
`;

const Thumbnail = ({ badge, labelColor, surveyId, surveyName, updateDate, responseCount }) => {
  const date = new Date(updateDate);
  const formattedDate = date.toLocaleDateString('ko-KR').replace(/\.\s/g, '.');
  return (
    <ThumbnailContainer>
      <ThumbnailContent>
        <ThumbnailHead>
          <Label labelColor={labelColor}>
            <Badge>{badge}</Badge>
          </Label>
          <MoreButton icon={<MoreOutlined />} size={'small'} />
        </ThumbnailHead>
        <ThumbnailBody>
          <SurveyName id={surveyId}>{surveyName}</SurveyName>
        </ThumbnailBody>
        <ThumbnailTail>
          <ResponseCount>{responseCount}개의 응답</ResponseCount>
          <UpdateDate>{formattedDate}</UpdateDate>
        </ThumbnailTail>
      </ThumbnailContent>
    </ThumbnailContainer>
  );
};

export default Thumbnail;
