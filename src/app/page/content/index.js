import React from "react";
import Message from "./message";
import Children from "./children";

export default ({ status, nodes }) => {
  if (status === "LOADING") return <Message>Loading...</Message>;

  if (status === "ERROR")
    return <Message>An error occurred while fetching the files!</Message>;

  if (status === "SUCCESS") return <Children nodes={nodes} expanded />;
};
