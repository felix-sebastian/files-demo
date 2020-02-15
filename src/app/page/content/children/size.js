import React from "react";
import styled from "styled-components";

const Box = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: #888;
`;

export default ({ value }) => <Box>{value}</Box>;
