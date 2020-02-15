import React from "react";
import styled from "styled-components";
import Node from "./node";
import Children from "../children";

const Folder = styled(Node)`
  background-color: #aaa;
  font-weight: 600;
`;

const Tree = ({ name, nodes }) => {
  return (
    <div>
      <Folder>folder: {name}</Folder>
      <Children nodes={nodes} />
    </div>
  );
};

export default Tree;
