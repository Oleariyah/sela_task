import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontFamily: "Nunito",
    fontStyle: "normal",
    marginBottom: 50
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  sortButton: {
    width: 229,
    background: "#2D9CDB",
    padding: 10,
    boxShadow: "none",
    borderRadius: 0
  },
  sortWrap: {
    display: "flex",
    width: 916,
    height: 45,
    textAlign: "center",
    border: "1px solid #2D9CDB",
    boxShadow: "none",
    borderRadius: 2
  },
  sortLabel: {
    width: 229,
    padding: 10
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Typography variant="h5" className={classes.title}>
          All Projects
        </Typography>
        <Box className={classes.sortWrap}>
          <Typography className={classes.sortLabel}>Sort by:</Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.sortButton}
            value="budget"
          >
            Budget
            <Icon className={classes.rightIcon}>keyboard_arrow_down</Icon>
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.sortButton}
            value="startDate"
          >
            Start date
            <Icon className={classes.rightIcon}>keyboard_arrow_down</Icon>
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.sortButton}
            value="endDate"
          >
            End date
            <Icon className={classes.rightIcon}>keyboard_arrow_down</Icon>
          </Button>
        </Box>
      </Grid>
    </div>
  );
};
