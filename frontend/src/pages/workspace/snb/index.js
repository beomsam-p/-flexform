import React from 'react';
import styled from 'styled-components';

const WorkspaceSnbContainer = styled.div`
  height: calc(100vh - 54px);
  width: 240px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  border-right: 1px solid #f5f5f5;
`;

const WorkspaceSnb = ({ children }) => {
  return <WorkspaceSnbContainer>{children}</WorkspaceSnbContainer>;
};

export default WorkspaceSnb;
