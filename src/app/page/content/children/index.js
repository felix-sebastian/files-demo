import React from "react";
import getFileIcon from "./getFileIcon";
import Size from "./size";
import Tree from "./tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Node from "./node";
import Space from "../space";

const Box = styled.div`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
  padding-left: ${({ padding }) => (padding ? "2rem" : "none")};
`;

const File = styled(Node)`
  background-color: #eee;
`;

const Empty = styled(Node)`
  color: #aaa;
`;

export default ({ nodes, expanded, padding }) => (
  <Box expanded={expanded} padding={padding}>
    {nodes
      .sort((a, b) => (a.name < b.name ? 1 : -1))
      .sort((a, b) => (a.type < b.type ? 1 : -1))
      .map((node, i) =>
        node.type === "folder" ? (
          <Tree key={i} name={node.name} nodes={node.children} />
        ) : (
          <File key={i}>
            <FontAwesomeIcon
              icon={getFileIcon(
                /(?:\.([^.]+))?$/.exec(node.name)[1].toLowerCase()
              )}
            />
            <Space horizontal size={0.5} />
            {node.name}
            <Space horizontal size={0.5} />
            <Size value={node.size} />
          </File>
        )
      )}
    {nodes.length === 0 && <Empty>This folder is empty</Empty>}
  </Box>
);
