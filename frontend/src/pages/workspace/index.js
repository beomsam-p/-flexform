import { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import currentWorkspaceReducer from 'hooks/workspace/CurrentWorkspaceReducer';

import WorkspaceSnb from 'pages/workspace/snb';
import AccordionSnb from 'pages/workspace/snb/AccordionSnb';
import WorkspaceSnbItems from 'pages/workspace/snb/WorkspaceSnbItems';
import WrokspaceSnbTitle from 'pages/workspace/snb/WrokspaceSnbTitle';
import WorksapceContent from 'pages/workspace/contents';
import WorspaceName from 'pages/workspace/contents/WorspaceName';
import Thumbnails from './contents/Thumbnails';
import DefaultThumbnail from './contents/DefaultThumbnail';

import useAxios from 'hooks/axios/UseAxios';
import { changeCurrentWorkspace } from 'hooks/workspace/CurrentWorkspaceActions';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
`;

const Workspace = () => {
  const url = '/v1/workspaces';
  const method = 'get';
  const [{ response: workspaces, isLoading, isError }, refetch] = useAxios({ url, method });

  const initWorkspace =
    isError || isLoading
      ? {
          workspaceId: null,
          workspaceName: null,
          order: null,
          deletable: true,
        }
      : workspaces[0];

  const [currentWorkspace, currentWorkspaceDispatch] = useReducer(currentWorkspaceReducer, null);

  useEffect(() => {
    workspaces && currentWorkspaceDispatch(changeCurrentWorkspace(initWorkspace));
  }, [isLoading, isError]);
  const workspaceSnbProps = {
    workspaces,
    isLoading,
    isError,
    refetch,
    currentWorkspace,
    currentWorkspaceDispatch,
  };

  return (
    <Container>
      <WorkspaceSnb>
        <WrokspaceSnbTitle {...workspaceSnbProps} />
        <WorkspaceSnbItems {...workspaceSnbProps} />
        <AccordionSnb />
      </WorkspaceSnb>
      <WorksapceContent>
        <WorspaceName {...workspaceSnbProps} />
        <Thumbnails>
          <DefaultThumbnail />
        </Thumbnails>
      </WorksapceContent>
    </Container>
  );
};

export default Workspace;
