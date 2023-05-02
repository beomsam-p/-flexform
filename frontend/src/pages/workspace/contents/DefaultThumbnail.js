import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusCircleFilled } from '@ant-design/icons';
import { BoxContainer } from '../../../components/CommonCss';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import callAxios from 'api/ApiCaller';
import Modal from 'components/Modal';
import SurveyForm from './modal/SurveyForm';
import { toSnakeCase } from 'util/ConvertConvention';
import { toast } from 'react-toastify';

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

const DefaultThumbnail = ({ workspaceId, surveys }) => {
  const queryClient = useQueryClient();

  const surveysUrl = `/v1/workspaces/${workspaceId}/surveys`;
  const postMethod = 'post';
  const { mutate } = useMutation({
    mutationFn: survey => callAxios({ url: surveysUrl, method: postMethod, body: survey }),
    onSuccess: data => {
      console.log(data);
      queryClient.setQueryData(['surveys', workspaceId], [...surveys, data]);
      toggleModal();
    },
  });

  const labelColursUrl = '/v1/label-colors';
  const getMethod = 'get';
  const { data: labelColors, isLoading } = useQuery(
    ['labelColors'],
    () => callAxios({ url: labelColursUrl, method: getMethod }),
    {
      refetchOnWindowFocus: false,
    },
  );

  const [isOpen, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpenEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [emoji, setEmoji] = useState('😃');
  const [surveyName, setSurveyName] = useState('');

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  const onClickOpenSurveyForm = () => {
    toggleModal();
  };

  const onClickAddSurvey = async () => {
    if (surveyName.trim().length === 0) {
      toast.warn('설문 이름을 입력해 주세요.');
      return;
    }

    const labelColor = labelColors[selectedIndex].colorCode;
    const badge = emoji;
    const survey = toSnakeCase({
      labelColor,
      badge,
      surveyName,
    });
    await mutate(survey);
  };

  const states = { isOpen, isLoading, labelColors, selectedIndex, isOpenEmojiPicker, emoji, surveyName };
  const setStates = { setSelectedIndex, setOpenEmojiPicker, setEmoji, setSurveyName };
  return (
    <BoxContainer>
      <Modal
        title={'새로운 설문 폼 만들기'}
        body={<SurveyForm {...states} {...setStates} />}
        isOpen={isOpen}
        onSubmit={onClickAddSurvey}
        onCancle={toggleModal}
        size={{ width: '650px', height: 'auto' }}
      />
      <SurveyThumbnailAddButton onClick={onClickOpenSurveyForm} />
    </BoxContainer>
  );
};

export default DefaultThumbnail;
