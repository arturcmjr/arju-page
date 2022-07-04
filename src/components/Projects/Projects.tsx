import { Grid, IconButton, Paper } from "@mui/material";
import EJobTitle from "../../common/enums/job-title.enum";
import getProjects from "../../common/projects/projects.data";
import "./Projects.scss";

export function Projects(props: { jobTitle: EJobTitle }): JSX.Element {
  const { jobTitle } = props;
  const projects = getProjects(jobTitle);
  
  return (
    <section className="projects-wrapper">
      <div id="projects">
        <h2 className="section-title">
          <span>03:</span> Projects
        </h2>
        <div className="grid-container">
          <Grid container spacing={2} columns={{ xs: 1, md: 2, xl: 3 }} alignItems="stretch">
            {projects.map((project, index) => (
              <Grid item xs={1} key={`proj-${index}`} gridRow="">
                <Paper elevation={0} className="project-item">
                  <div className="content">
                    <h3 className="title">{project.name}</h3>
                    {project.description}
                    <div className="technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={`p-tech-${index}`}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="overlay">
                    <div className="links">
                      {project.links.map((link, index) => (
                        <IconButton
                          color="secondary"
                          key={`p-link-${index}`}
                          href={link.url}
                          target="_blank"
                        >
                          {link.icon}
                        </IconButton>
                      ))}
                    </div>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
}

/* function ProjectBox (props: {project: IJobTheme}) : JSX.Element {

} */

export default Projects;
