import React from 'react';
import styled from 'styled-components';
const ContentContainer = styled.div`
  width: 100%;
`;
const Content = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default Content;
