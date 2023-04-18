import React from 'react';
import styled from 'styled-components';
const ThumbnailsContainer = styled.div`
  padding: 35px 11px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Thumbnails = ({ children }) => {
  return <ThumbnailsContainer>{children}</ThumbnailsContainer>;
};

export default Thumbnails;
