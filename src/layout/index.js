import React from "react";
import Headers from "layout/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Content = styled.div`
  width: 100%;
  background-color: beige;
`;

const Layout = () => {
  return (
    <Container>
      <Headers />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
