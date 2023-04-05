import styled from "styled-components";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const AccordionMenu = styled(Menu)`
  width: 100%;
  &.ant-menu-light.ant-menu-inline {
    border-inline-end: none;
  }

  &.ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline {
    background: white;
  }
`;

const AccordionSnb = () => {
  const getItem = (label, key, icon, children, type) => {
    return { key, icon, children, label, type };
  };
  const items = [
    getItem("결과 모아보기", "SurveyResult", <AppstoreOutlined />, [
      getItem("결과 페이지", "1"),
      getItem("응답 페이지", "2"),
    ]),
    {
      type: "divider",
    },
    getItem("Help Desk", "HelpDesk", <AppstoreOutlined />, [
      getItem("FAQ", "3"),
      getItem("버그 리포트", "4"),
    ]),
  ];
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <AccordionMenu
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default AccordionSnb;
