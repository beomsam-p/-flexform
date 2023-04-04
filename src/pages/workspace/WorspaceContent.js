import React from "react";
import styled from "styled-components";
import WorspaceNameArea from "./WorspaceNameArea";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0fr auto;
`;

const WorspaceContent = () => {
  return (
    <Container>
      <WorspaceNameArea />
      <div></div>
    </Container>
  );
};

export default WorspaceContent;
