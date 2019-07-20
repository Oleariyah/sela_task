import React, { useEffect } from "react";
import { data } from "../data";
import Project from "./Project";
import SortBar from "./SortBar";
import Grid from "@material-ui/core/Grid";

export default () => {
  const [projectsProps, setProject] = React.useState({
    projects: []
  });

  useEffect(() => {
    let tempProjects = [];
    data.forEach(item => {
      const singleItem = { ...item };
      tempProjects = [...tempProjects, singleItem];
    });
    setProject({ projects: tempProjects });
  }, []);

  return (
    <div>
      <SortBar />
      <Grid container spacing={6}>
        {projectsProps.projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </Grid>
    </div>
  );
};
