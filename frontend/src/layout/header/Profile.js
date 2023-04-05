import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import defaultProfile from "assets/default_profile.png";
import { Card, Avatar } from "antd";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
const { Meta } = Card;

const ProfileTitleIcon = styled(Meta)`
  cursor: pointer;
`;

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0%{
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: lightgrey;
  border-radius: 40px;
  margin-right: 25px;
  cursor: pointer;
`;

const ProfileCard = styled(Card)`
  position: absolute;
  right: 75px;
  top: 5px;
  width: 280px;
  &.ant-card {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  .no-margin {
    margin: 0;
  }
  visibility: ${({ visible }) => (visible === "true" ? "visible" : "hidden")};
  animation: ${({ visible }) => (visible === "true" ? fadeIn : fadeOut)}
    ease-in-out 0.2s;
`;

const ProfileCardBtn = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
`;
const ProfileCardButtonText = styled.div`
  margin-left: 10px;
`;
const Profile = () => {
  const [visible, setVisible] = useState(false);

  const onClickProfile = () => {
    setVisible(!visible);
  };
  return (
    <Container>
      <ProfileImg src={defaultProfile} onClick={onClickProfile} />
      <ProfileCard
        bordered={false}
        visible={visible.toString()}
        actions={[
          <ProfileCardBtn>
            <SettingOutlined key="my" />
            <ProfileCardButtonText>마이페이지</ProfileCardButtonText>
          </ProfileCardBtn>,
          <ProfileCardBtn>
            <LogoutOutlined key="logout" />
            <ProfileCardButtonText>로그아웃</ProfileCardButtonText>
          </ProfileCardBtn>,
        ]}
      >
        <ProfileTitleIcon
          avatar={<Avatar src={defaultProfile} />}
          title="amdin@flexform.com"
        />
      </ProfileCard>
    </Container>
  );
};

export default Profile;
