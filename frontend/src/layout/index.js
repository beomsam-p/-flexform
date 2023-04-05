import React from "react";
import Header from "layout/header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Content = styled.div`
  width: 100%;
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
