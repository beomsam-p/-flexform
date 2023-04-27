import EmojiPicker from 'emoji-picker-react';
import React from 'react';
import styled from 'styled-components';

const EmojiPickerDim = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1001;
  padding-left: 300px;
  padding-top: 450px;
`;
const EmojiPickerModal = ({ isOpen, onClickDim, onEmojiClick }) => {
  const preventEventBubbling = e => {
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <EmojiPickerDim isOpen={isOpen} onClick={onClickDim}>
      <div onClick={preventEventBubbling}>
        <EmojiPicker
          onEmojiClick={onEmojiClick}
          disableAutoFocus={true}
          lazyLoadEmojis={true}
          height="380px"
          categories={[
            {
              category: 'smileys_people',
              name: 'Smileys & People',
            },
            {
              category: 'animals_nature',
              name: 'Animals & Nature',
            },
            {
              category: 'food_drink',
              name: 'Food & Drink',
            },
            {
              category: 'activities',
              name: 'Activities',
            },
          ]}
        />
      </div>
    </EmojiPickerDim>
  );
};

export default EmojiPickerModal;
