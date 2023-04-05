import React from "react";
import styled from "styled-components";

const WorkspaceContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 54px);
  display: grid;
  grid-template-rows: 0fr auto;
  padding: 36px 50px;
  overflow-y: auto;
`;

const WorspaceContent = ({ children }) => {
  return <WorkspaceContentContainer>{children}</WorkspaceContentContainer>;
};

export default WorspaceContent;
