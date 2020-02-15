export default nodes => {
  let fileCount = 0;
  let totalSize = 0;

  const count = nodes =>
    nodes.forEach(node => {
      if (node.type === "folder") count(node.children);
      else {
        fileCount++;
        totalSize += node.size;
      }
    });

  if (nodes) count(nodes);

  return {
    fileCount,
    totalSize
  };
};
