import { Grid, IconButton, Paper } from "@mui/material";
import EJobTitle from "../../common/enums/job-title.enum";
import getProjects from "../../common/projects/projects.data";
import { IProject } from "../../common/projects/projects.interface";
import "./Projects.scss";
import sadSmartPhone from "../../images/sad-smartphone.svg";

export function Projects(props: { jobTitle: EJobTitle }): JSX.Element {
  const { jobTitle } = props;
  const projects = getProjects(jobTitle);

  return (
    <section className="projects-wrapper">
      <div id="projects">
        <h2 className="section-title">
          <span>03:</span> Projects
        </h2>
        {projects.length > 0 ? <ProjectsGrid projects={projects} /> : <NoProjects />}
      </div>
    </section>
  );
}

function NoProjects(): JSX.Element {
  return (
    <div className="no-projects">
      <img src={sadSmartPhone} alt="sad smartphone" />
      <h3>Nothing to show here</h3>
      <p>
        I'm sorry that there are no projects here. I had to focus on web development in the first
        months of this portfolio. But don't give up on me. You can check out another job title or
        check here later if there are any updates.
      </p>
    </div>
  );
}

function ProjectsGrid(props: { projects: IProject[] }): JSX.Element {
  const { projects } = props;

  return (
    <div>
      <p>Hover the projects to see their links.</p>
      <div className="grid-container">
        <Grid container spacing={2} columns={{ xs: 1, md: 2, xl: 3 }} alignItems="stretch">
          {projects.map((project, index) => (
            <Grid item xs={1} key={`proj-${index}`} gridRow="">
              <ProjectItem project={project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

function ProjectItem(props: { project: IProject }): JSX.Element {
  const { project } = props;

  return (
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
      <div className="links-container">
        <div className="links">
          {project.links.map((link, index) => (
            <IconButton
              className="link-btn"
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
  );
}

export default Projects;
