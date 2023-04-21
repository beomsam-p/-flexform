import React, { useEffect } from 'react';
import styled from 'styled-components';
import DefaultThumbnail from './DefaultThumbnail';
import Thumbnail from './Thumbnail';
import { useQuery } from 'react-query';
import axios from 'axios';
import { toCamelCase } from 'util/ConvertConvention';
import useAxios from 'hooks/axios/UseAxios';

const ThumbnailsContainer = styled.div`
  padding: 35px 11px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-auto-rows: 150px;
`;

const Thumbnails = ({ currentWorkspace, currentWorkspaceDispatch }) => {
  const url = `/v1/workspaces/${currentWorkspace?.workspaceId}/surveys`;
  const method = 'get';
  const [{ response: surveys, isLoading, isError }, refetch] = useAxios({ url, method }, { menual: true });
  useEffect(() => {
    refetch();
  }, [currentWorkspace]);

  console.log(surveys);
  return (
    <ThumbnailsContainer>
      <DefaultThumbnail />
      {surveys && surveys?.map(survey => <Thumbnail key={survey.surveyId} {...survey} />)}
    </ThumbnailsContainer>
  );
};

export default Thumbnails;
