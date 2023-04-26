import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusCircleFilled } from '@ant-design/icons';
import { BoxContainer } from '../../../components/CommonCss';
import { useQuery } from 'react-query';
import callAxios from 'api/ApiCaller';
import Modal from 'components/Modal';
import AddSurveyForm from './AddSurveyForm';

const SurveyThumbnailAddButton = styled(PlusCircleFilled)`
  font-size: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: var(--font-color-light-primary);
  }
  color: var(--font-color-light-gray);
`;

const DefaultThumbnail = ({ currentWorkspace }) => {
  const workspaceId = currentWorkspace?.workspaceId;
  const url = `/v1/workspaces/${workspaceId}/surveys`;
  const method = 'post';
  const { data, isLoading, isError, refetch } = useQuery(['survey', workspaceId], () => callAxios({ url, method }), {
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const [isOpen, setOpen] = useState(false);

  const toggleModal = e => {
    setOpen(!isOpen);
  };

  const onSurveyBtnClick = () => {
    toggleModal();
  };

  return (
    <>
      <Modal
        title={'새로운 설문 폼 만들기'}
        body={<AddSurveyForm isOpen={isOpen} />}
        isOpen={isOpen}
        onSubmit={() => {
          console.log('submit');
        }}
        onCancle={toggleModal}
        size={{ width: '650px', height: 'auto' }}
      />
      <BoxContainer>
        <SurveyThumbnailAddButton onClick={onSurveyBtnClick} />
      </BoxContainer>
    </>
  );
};

export default DefaultThumbnail;
