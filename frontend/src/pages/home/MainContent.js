import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png';

const MainContentContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImg = styled.img`
  height: 50px;
  margin-bottom: 20px;
`;

const MainContent = () => {
  return (
    <MainContentContainer>
      <MainImg src={logo} alt="logo" />
      <div>설문조사 제작부터 배포까지의 모든것, </div>
      <div>FLEX FORM으로 설문하세요</div>
    </MainContentContainer>
  );
};

export default MainContent;
