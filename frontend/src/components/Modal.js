import React from 'react';
import styled from 'styled-components';
import { BoxCss } from './CommonCss';
import { Button, Divider, Space } from 'antd';

const Dim = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ modal_withd }) => modal_withd};
  height: ${({ modal_height }) => modal_height};
  background-color: white;
  font-size: 20px;
  z-index: 999;
  ${BoxCss}
`;

const ModalHeader = styled.div`
  margin: 25px 20px 0 20px;
  text-align: center;
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
    <>
      <Dim isOpen={isOpen} onClick={onCancle}></Dim>
      <ModalContainer isOpen={isOpen} modal_withd={size.width} modal_height={size.height}>
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
    </>
  );
};

export default Modal;
