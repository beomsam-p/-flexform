import React from 'react';
import { Badge, Label, BoxContainer, LabelContainer } from '../../../components/CommonCss';
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

const MoreButton = styled(Button)`
  &.ant-btn {
    border-radius: 20px;
    border: 0;
    background-color: var(--backgound-color-light-gray);
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
  color: var(--font-color-default);
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
  color: var(--font-color-light-gray);
  width: 100%;
  margin-bottom: 10px;
`;

const UpdateDate = styled.div`
  font-size: 14px;
  color: var(--font-color-light-gray);
  width: 100%;
  text-align: right;
`;

const Thumbnail = ({ badge, labelColor, surveyId, surveyName, updateDate, responseCount }) => {
  const date = new Date(updateDate);
  const formattedDate = date.toLocaleDateString('ko-KR').replace(/\.\s/g, '.');
  return (
    <BoxContainer>
      <ThumbnailContent>
        <ThumbnailHead>
          <LabelContainer>
            <Label labelColor={labelColor}>
              <Badge>{badge}</Badge>
            </Label>
          </LabelContainer>
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
    </BoxContainer>
  );
};

export default Thumbnail;
