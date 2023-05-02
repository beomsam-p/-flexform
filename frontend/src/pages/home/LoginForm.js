import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginFormContainer = styled.div`
  min-width: 300px;
  padding-top: 10px;
`;

const LoginForm = () => {
  const navigate = useNavigate();

  const onFinish = values => {
    navigate('/workspace');
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <LoginFormContainer>
      <Form
        name="loginForm"
        style={{
          maxWidth: '100%',
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '아이디를 입력해주세요.',
            },
          ]}
        >
          <Input placeholder="아이디" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력해주세요.',
            },
          ]}
        >
          <Input.Password placeholder="비밀번호" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            로그인
          </Button>
        </Form.Item>
      </Form>
    </LoginFormContainer>
  );
};

export default LoginForm;
