import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <div>logo</div>
      <div>my info</div>
    </Container>
  );
};

export default Header;
