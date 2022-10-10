import React from "react";

export default function Loading() {
  const styles = {
    display: "flex",
    justifyContent: "center",
    fontSize: "45px",
    position: "relative",
    top: "3em",
    fontWeight: "bold",
  };
  return <div style={styles}>Loading...</div>;
}
