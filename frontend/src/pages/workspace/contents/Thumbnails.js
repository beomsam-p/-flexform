import React from 'react';
import styled from 'styled-components';
import DefaultThumbnail from './DefaultThumbnail';
import Thumbnail from './Thumbnail';
import { useQuery } from 'react-query';
import callAxios from 'api/ApiCaller';

const ThumbnailsContainer = styled.div`
  padding: 35px 11px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-auto-rows: 150px;
`;

const Thumbnails = ({ currentWorkspace }) => {
  const workspaceId = currentWorkspace?.workspaceId;
  const url = `/v1/workspaces/${workspaceId}/surveys`;
  const enabled = !!workspaceId;
  const method = 'get';
  const { data: surveys, isLoading } = useQuery(['surveys', workspaceId], () => callAxios({ url, method }), {
    enabled,
    refetchOnWindowFocus: false,
  });
  const isWait = !enabled || isLoading;
  return (
    <ThumbnailsContainer>
      <DefaultThumbnail workspaceId={workspaceId} surveys={surveys} />
      {!isWait && surveys.map(survey => <Thumbnail key={survey.surveyId} {...survey} />)}
    </ThumbnailsContainer>
  );
};

export default Thumbnails;
