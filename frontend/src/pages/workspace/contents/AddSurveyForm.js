import { Button, Dropdown } from 'antd';
import { InputCss } from 'components/CommonCss';
import React, { useEffect, useRef, useState, useTransition } from 'react';
import styled from 'styled-components';
import { Badge } from 'components/CommonCss';
import { Label } from 'components/CommonCss';
import { LabelContainer } from 'components/CommonCss';
import EmojiPicker from 'emoji-picker-react';

const AddSurveyFormContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SurveyFormContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const SurveyFormTitle = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: var(--font-color-light-gray);
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

const EmojiPimckerContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 45%;
  display: ${({ isOpenEmojiPicker }) => (isOpenEmojiPicker ? 'block' : 'none')};
  z-index: 999;
`;

const AddSurveyForm = ({ isOpen }) => {
  const colors = [
    'var(--label-color-blue)',
    'var(--label-color-lime)',
    'var(--label-color-green)',
    'var(--label-color-pink)',
    'var(--label-color-orange)',
    'var(--label-color-indigo)',
    'var(--label-color-red)',
  ];
  const indexes = [0, 1, 2, 3, 4, 5, 6];
  const labelNames = ['BLUE', 'LIME', 'GREEN', 'PINK', 'ORANGE', 'INDIGO', 'RED'];

  const [labelColor, setLabelColor] = useState(colors[0]);
  const [labelColorName, setLabelColorName] = useState(labelNames[0]);
  const [isOpenEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [emoji, setEmoji] = useState(null);
  const [surveyName, setSurveyName] = useState('');
  const pickerRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', formModalOutside);
    return () => {
      document.removeEventListener('mousedown', formModalOutside);
    };
  });

  useEffect(() => {
    if (!isOpen) {
      cleanUp();
    }
  }, [isOpen]);

  const cleanUp = () => {
    setLabelColor(colors[0]);
    setLabelColorName(labelNames[0]);
    setEmoji(null);
    inputRef.current.value = '';
  };

  const formModalOutside = event => {
    if (isOpenEmojiPicker && !pickerRef.current.contains(event.target)) {
      setOpenEmojiPicker(false);
    }
  };

  const onClickLabel = event => {
    const color = event.target.getAttribute('data-color');
    const colorName = event.target.textContent;
    setLabelColor(color);
    setLabelColorName(colorName);
  };

  const onToggleEmojiPicker = () => {
    setOpenEmojiPicker(!isOpenEmojiPicker);
  };

  const onSelectEmoji = emojiObject => {
    setOpenEmojiPicker(!isOpenEmojiPicker);
    setEmoji(emojiObject.emoji);
  };

  const onBlurInput = event => {
    setSurveyName(event.target.value);
  };

  const labelItems = indexes.map(index => {
    return {
      key: index,
      label: (
        <Label data-color={colors[index]} labelColor={colors[index]} onClick={onClickLabel}>
          {labelNames[index]}
        </Label>
      ),
    };
  });

  return (
    <AddSurveyFormContainer>
      <SurveyFormTitle>설문 이름</SurveyFormTitle>
      <SurveyFormContent>
        <SurveyFormInput ref={inputRef} type="text" onBlur={onBlurInput} />
      </SurveyFormContent>
      <SurveyFormTitle>설문 배지</SurveyFormTitle>
      <SurveyFormContent>
        <LabelContainer>
          <Label labelColor={labelColor}>
            <Badge>{emoji ?? '😃'}</Badge>
          </Label>
        </LabelContainer>

        <Dropdown
          menu={{
            items: labelItems,
          }}
          placement="bottomLeft"
          trigger={['click']}
        >
          <Button style={{ width: '100px', marginRight: '10px' }}>
            <Label labelColor={labelColor}>{labelColorName}</Label>
          </Button>
        </Dropdown>
        <Button onClick={onToggleEmojiPicker} style={{ width: '100px', marginRight: '10px' }}>
          이모지 변경
        </Button>
        <EmojiPimckerContainer isOpenEmojiPicker={isOpenEmojiPicker} ref={pickerRef}>
          <EmojiPicker onEmojiClick={onSelectEmoji} disableAutoFocus={true} lazyLoadEmojis={true} height="25em" />
        </EmojiPimckerContainer>
      </SurveyFormContent>
    </AddSurveyFormContainer>
  );
};

export default AddSurveyForm;
