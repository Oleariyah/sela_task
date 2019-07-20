import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  status: {
    position: "absolute",
    background: "#27AE60",
    color: "white",
    padding: 2,
    height: 28,
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
    borderRadius: "5 0"
  }
});
export default props => {
  const { status } = props;
  const classes = useStyles();

  return (
    <div>
      {status === "Initiated" ? (
        <Box className={classes.status} style={{ background: "#27AE60" }}>
          {" "}
          {status}
        </Box>
      ) : status === "On track to be defaulted" ? (
        <Box className={classes.status} style={{ background: "#F2994A" }}>
          {" "}
          {status}
        </Box>
      ) : status === "completed" ? (
        <Box className={classes.status} style={{ background: "#333333" }}>
          {" "}
          {status}
        </Box>
      ) : status === "defaulted" ? (
        <Box className={classes.status} style={{ background: "#EB5757" }}>
          {" "}
          {status}
        </Box>
      ) : status === "Not initated" ? (
        <Box className={classes.status} style={{ background: "#9B51E0" }}>
          {" "}
          {status}
        </Box>
      ) : status === "On track to be completed" ? (
        <Box className={classes.status} style={{ background: "#828282" }}>
          {" "}
          {status}
        </Box>
      ) : null}
    </div>
  );
};
