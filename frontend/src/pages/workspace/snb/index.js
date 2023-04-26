import React from 'react';
import styled from 'styled-components';

const WorkspaceSnbContainer = styled.div`
  height: calc(100vh - 54px);
  width: 240px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  border-right: 1px solid var(--border-color-light-gray);
`;

const WorkspaceSnb = ({ children }) => {
  return <WorkspaceSnbContainer>{children}</WorkspaceSnbContainer>;
};

export default WorkspaceSnb;
