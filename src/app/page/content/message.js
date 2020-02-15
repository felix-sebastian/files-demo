import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 1rem;
  margin: 0.25rem;
  border-radius: 0.1rem;
`;

export default ({ children }) => (
  <Box>
    <div>{children}</div>
  </Box>
);
