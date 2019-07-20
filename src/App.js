import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import ProjectList from "./components/ProjectList";

const useStyles = makeStyles({
  root: {
    margin: "110px 88px 88px 88px"
  }
});

export default () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.root}>
        <ProjectList />
      </Box>
    </Fragment>
  );
};
