import React from 'react';
import Header from 'layout/header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Content from './content/Content';

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Layout = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
