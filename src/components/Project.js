import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import ProgressBar from "react-bootstrap/ProgressBar";
import ProjectStatus from "./ProjectStatus";

const useStyles = makeStyles({
  card: {
    display: "flex",
    position: "relative",
    background: "#F2F2F2",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
    width: 612,
    height: 350
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    marginTop: 35,
    color: "#333333"
  },
  cover: {
    width: 225
  },
  info: {
    marginTop: 25,
    marginBottom: 25,
    fontSize: 14
  },
  leftIcon: {
    display: "flex",
    justifyContent: "left"
  },
  avatar: {
    width: 45,
    height: 45,
    marginRight: 5
  },
  iconStyle: {
    marginRight: 10
  },
  subheading: {
    fontSize: 16
  },
  more: {
    textTransform: "capitalize"
  },
  progress: {
    position: "absolute",
    width: 183,
    height: 28,
    left: 20,
    bottom: 15
  },
  status: {
    position: "absolute",
    background: "#27AE60",
    color: "white",
    padding: 2,
    height: 28,
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
    borderRadius: "5 0"
  },
  link: {
    color: "black"
  }
});

export default props => {
  const classes = useStyles();
  const { project } = props;

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <ProjectStatus status={project.status} />
        <CardMedia
          component="img"
          className={classes.cover}
          image={project.img}
          title={project.title}
        />
        <ProgressBar
          now={project.progress}
          label={`${project.progress}%`}
          className={classes.progress}
        />

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {project.title}
            </Typography>
            <Grid container spacing={3}>
              <Grid item>
                <Box className={classes.leftIcon}>
                  <img
                    src="/images/places.svg"
                    alt="places"
                    className={classes.iconStyle}
                  />
                  {""}
                  {project.location}
                </Box>
              </Grid>
              <Grid item>
                <Box className={classes.leftIcon}>
                  <img
                    src="/images/money.svg"
                    alt="money"
                    className={classes.iconStyle}
                  />
                  {""}
                  {`Budget: ${project.budget}`}
                </Box>{" "}
              </Grid>
            </Grid>
            <Box className={classes.info}>
              The people of Ikorodu have long sought for a solution to the
              perennial water crisis plaguing the community. Help came when
              community members took action and decided to solve the problem...
              <Link href={project.link}>Read more</Link>
            </Box>
            <Divider />
            <Typography className={classes.subheading}>Contractors</Typography>
            <Grid container justify="flex-start" alignItems="flex-start">
              {project.contractors.map((contractor, index) => (
                <Avatar
                  key={index}
                  alt="Remy Sharp"
                  src={contractor}
                  className={classes.avatar}
                />
              ))}
            </Grid>
            <Grid container justify="flex-end" alignItems="flex-end">
              <Button color="inherit" className={classes.more}>
                <Link href={project.link} className={classes.link}>
                  View more details
                </Link>
                <Icon>keyboard_arrow_right</Icon>
              </Button>{" "}
            </Grid>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};
