import Snb from "pages/workspace/snb";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: beige;
`;

const Servey = () => {
  return (
    <Container>
      <Snb />
      <div>servey</div>;
    </Container>
  );
};

export default Servey;
