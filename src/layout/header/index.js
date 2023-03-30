import React from "react";
import styled from "styled-components";
import HeadContent from "./HeadContent";
import Logo from "./Logo";
import Profile from "./Profile";

const Container = styled.div`
  height: 54px;
  display: grid;
  grid-template-columns: auto 5fr auto;
  border-bottom: 1px solid #efefef;
`;

const Header = () => {
  return (
    <Container>
      <Logo />
      <HeadContent />
      <Profile />
    </Container>
  );
};

export default Header;
