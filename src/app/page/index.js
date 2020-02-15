import React from "react";
import Box from "./box";
import Well from "./well";
import Content from "./content";

export default ({ status, nodes }) => {
  return (
    <Box>
      <Well>
        <Content status={status} nodes={nodes} />
      </Well>
    </Box>
  );
};
