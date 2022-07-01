import { Grid, IconButton, Paper } from "@mui/material";
import IJobTheme from "../../common/interfaces/job-theme.interface";
import "./Projects.scss";

export function Projects(props: { jobTheme: IJobTheme }): JSX.Element {
  const { jobTheme } = props;
  const { projects } = jobTheme;
  return (
    <section className="projects-wrapper">
      <div id="projects">
        <h2 className="section-title">
          <span>03:</span> Projects
        </h2>
        <div className="grid-container">
          <Grid container spacing={2} columns={{ xs: 1, md: 3 }} alignItems="stretch">
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

export default Projects;
