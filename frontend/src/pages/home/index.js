import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import MainContent from './MainContent';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Home = () => {
  return (
    <HomeContainer>
      <MainContent />
      <LoginForm />
    </HomeContainer>
  );
};

export default Home;
