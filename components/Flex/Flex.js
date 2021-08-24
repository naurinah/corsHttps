const Flex = ({ children, js = "center", ai = "center", fd = "row" }) => {
  const styles = {
    display: "flex",
    justifyContent: js,
    alignItems: ai,
    flexWrap: "wrap",
    flexDirection: fd,
  };
  return <div style={styles}>{children}</div>;
};

export default Flex;
