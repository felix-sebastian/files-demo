import React from "react";
import Size from "./size";
import Tree from "./tree";
import styled from "styled-components";
import Node from "./node";
import Space from "../space";

const Box = styled.div`
  display: "block";
  padding-left: ${({ padding }) => (padding ? "2rem" : "none")};
`;

const File = styled(Node)`
  background-color: #eee;
`;

export default ({ nodes, padding }) => (
  <Box padding={padding}>
    {nodes
      .sort((a, b) => (a.name < b.name ? 1 : -1))
      .sort((a, b) => (a.type < b.type ? 1 : -1))
      .map((node, i) =>
        node.type === "folder" ? (
          <Tree key={i} name={node.name} nodes={node.children} />
        ) : (
          <File key={i}>
            <Space horizontal size={0.5} />
            file: {node.name}
            <Space horizontal size={0.5} />
            <Size value={node.size} />
          </File>
        )
      )}
  </Box>
);
