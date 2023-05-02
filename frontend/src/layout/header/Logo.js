import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 54px;
  display: flex;
  align-items: center;
`;
const LogoImg = styled.img`
  margin-left: 20px;
  height: 23px;
`;
const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <LogoImg src={logo} alt="logo" />
      </Link>
    </Container>
  );
};

export default Logo;
