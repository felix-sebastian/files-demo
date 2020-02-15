import React from "react";
import Body from "./body";
import Footer from "./footer";
import Message from "./message";
import Children from "./children";
import Space from "./space";
import convertBytes from "./convertBytes";
import useCounts from "./useCounts";

export default ({ status, nodes }) => {
  const { fileCount, totalSize } = useCounts(nodes);

  if (status === "LOADING") return <Message>Loading...</Message>;

  if (status === "ERROR")
    return <Message>An error occurred while fetching the files!</Message>;

  if (status === "SUCCESS")
    return (
      <>
        <Body>
          <Children nodes={nodes} expanded />
        </Body>
        <Space size={0.5} />
        <Footer>
          Total files: {fileCount}
          <br />
          Total size: {convertBytes(totalSize)}
        </Footer>
      </>
    );
};
