import {
  faCaretDown,
  faCaretRight,
  faFolder,
  faFolderOpen
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import Node from "./node";
import Children from "../children";
import Space from "../space";

const Folder = styled(Node)`
  background-color: #aaa;
  font-weight: 600;
`;

const FolderIcon = styled(FontAwesomeIcon)`
  color: #222;
`;

const Tree = ({ name, nodes }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Folder onClick={() => setExpanded(!expanded)}>
        <FolderIcon icon={expanded ? faCaretDown : faCaretRight} />
        <Space horizontal size={0.5} />
        <FolderIcon icon={expanded ? faFolderOpen : faFolder} />
        <Space horizontal size={0.5} />
        {name}
      </Folder>
      <Children nodes={nodes} expanded={expanded} padding />
    </div>
  );
};

export default Tree;
