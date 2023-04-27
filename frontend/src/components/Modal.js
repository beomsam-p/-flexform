import React from 'react';
import styled from 'styled-components';
import { BoxCss } from './CommonCss';
import { Button, Divider, Space } from 'antd';

const ModalDim = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: fixed;
  width: ${({ modal_withd }) => modal_withd};
  height: ${({ modal_height }) => modal_height};
  background-color: white;
  z-index: 1000;
  ${BoxCss}
`;

const ModalHeader = styled.div`
  margin: 25px 20px 0 20px;
  text-align: center;
  font-size: 20px;
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 10px 20px;
`;
const ModalTail = styled.div`
  display: flex;
  justify-content: right;
  padding: 0 20px 20px 20px;
`;

const Modal = ({ isOpen, onSubmit, onCancle, title, body, tail, size = { width: '300px', height: '200px' } }) => {
  return (
    <ModalDim
      isOpen={isOpen}
      onClick={e => {
        onCancle(e);
      }}
    >
      <ModalContainer
        modal_withd={size.width}
        modal_height={size.height}
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <ModalHeader>{title}</ModalHeader>
        <Divider />
        <ModalBody>{body}</ModalBody>
        <Divider />
        <ModalTail>
          {tail ? (
            { tail }
          ) : (
            <Space wrap>
              <Button type="primary" onClick={onSubmit}>
                확인
              </Button>
              <Button onClick={onCancle}>취소</Button>
            </Space>
          )}
        </ModalTail>
      </ModalContainer>
    </ModalDim>
  );
};

export default Modal;
