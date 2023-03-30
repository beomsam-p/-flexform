import React from "react";
import Headers from "layout/Header";
import Snb from "components/snb";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
`;

const Layout = () => {
  return (
    <Container>
      <Headers />
      <Content>
        <Snb />
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
