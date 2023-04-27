import { Button } from 'antd';

import { InputCss } from 'components/CommonCss';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Badge } from 'components/CommonCss';
import { Label } from 'components/CommonCss';
import { LabelContainer } from 'components/CommonCss';
import { useQuery } from 'react-query';
import callAxios from 'api/ApiCaller';
import SurveyFormTitle from './SurveyFormTitle';
import SurveyFormContent from './SurveyFormContent';
import SurveyFormLabels from './SurveyFormLabels';
import EmojiPickerModal from 'components/EmojiPickerModal';

const AddSurveyFormContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SurveyFormInput = styled.input`
  height: 40px;
  width: 100%;
  margin: 0 0 20px 5px;
  padding-left: 10px;
  font-size: 18px;
  background-color: var(--backgound-color-light-gray);
  ${InputCss}
`;

const SurveyForm = ({
  isOpen,
  isLoading,
  labelColors,
  selectedIndex,
  isOpenEmojiPicker,
  emoji,
  surveyName,
  setSelectedIndex,
  setOpenEmojiPicker,
  setEmoji,
  setSurveyName,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (!isOpen) {
      cleanUp();
    }
  }, [isOpen]);

  const cleanUp = () => {
    setSelectedIndex(0);
    setEmoji('😃');
    setOpenEmojiPicker(false);
    inputRef.current.value = '';
  };

  const onClickLabel = event => {
    const index = event.target.getAttribute('data-index');
    setSelectedIndex(index);
  };

  const onClickBtnPickerToggle = () => {
    setOpenEmojiPicker(!isOpenEmojiPicker);
  };

  const onSelectEmoji = emojiObject => {
    setOpenEmojiPicker(!isOpenEmojiPicker);
    setEmoji(emojiObject.emoji);
  };

  const onBlurInput = event => {
    console.log(event.target.value);
    setSurveyName(event.target.value);
  };

  const labelItems =
    !isLoading &&
    labelColors.map((labelColor, index) => {
      return {
        key: index,
        label: (
          <Label data-index={index} labelColor={labelColor.colorCode} onClick={onClickLabel}>
            {labelColor.colorName}
          </Label>
        ),
      };
    });

  return (
    <AddSurveyFormContainer>
      <SurveyFormTitle>설문 이름</SurveyFormTitle>
      <SurveyFormContent>
        <SurveyFormInput ref={inputRef} type="text" defaultValue={surveyName} onBlur={onBlurInput} />
      </SurveyFormContent>
      <SurveyFormTitle>설문 배지</SurveyFormTitle>
      <SurveyFormContent>
        <LabelContainer>
          {isLoading ? (
            <div>loading ... </div>
          ) : (
            <Label labelColor={labelColors[selectedIndex].colorCode}>
              <Badge>{emoji ?? '😃'}</Badge>
            </Label>
          )}
        </LabelContainer>
        <SurveyFormLabels
          labelItems={labelItems}
          labelColors={labelColors}
          selectedIndex={selectedIndex}
          isLoading={isLoading}
        />
        <EmojiPickerModal isOpen={isOpenEmojiPicker} onClickDim={onClickBtnPickerToggle} onEmojiClick={onSelectEmoji} />
        <Button onClick={onClickBtnPickerToggle} style={{ width: '100px', marginLeft: '10px' }}>
          {isOpenEmojiPicker ? '선택 닫기' : '이모지 선택'}
        </Button>
      </SurveyFormContent>
    </AddSurveyFormContainer>
  );
};

export default SurveyForm;
