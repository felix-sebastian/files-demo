import React, { useState, useEffect } from "react";
import axios from "axios";
import Page from "./page";

export default () => {
  const [nodes, setNodes] = useState(null);
  const [status, setStatus] = useState("LOADING");

  useEffect(() => {
    axios
      .get("https://chal-locdrmwqia.now.sh/")
      .then(response => {
        if (response.status === 200) {
          setNodes(response.data.data);
          setStatus("SUCCESS");
        } else setStatus("ERROR");
      })
      .catch(() => {
        setStatus("ERROR");
      });
  }, []);

  return <Page status={status} nodes={nodes} />;
};
