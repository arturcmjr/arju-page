import { Grid, IconButton, Paper } from "@mui/material";
import EJobTitle from "../../common/enums/job-title.enum";
import getProjects from "../../common/projects/projects.data";
import { IProject } from "../../common/projects/projects.interface";
// TODO: use modules
import "./Projects.scss";
import { getAnalytics, logEvent } from "@firebase/analytics";
import { useTranslation } from "react-i18next";

function isMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function Projects(props: { jobTitle: EJobTitle }): JSX.Element {
  const { jobTitle } = props;
  const projects = getProjects(jobTitle);
  const { t } = useTranslation();
  const isMobile = isMobileDevice();

  return (
    <section className="projects-wrapper">
      <div id="projects">
        <h2 className="section-title">
          <span>03:</span> {t('projects.title')}
        </h2>
        <div>
          <p>{t(`projects.instructions${isMobile ? '_mobile' : ''}`)}</p>
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
      </div>
    </section>
  );
}

function ProjectItem(props: { project: IProject }): JSX.Element {
  const { project } = props;
  const { t } = useTranslation();

  function onLinkClick(url: string) {
    const analytics = getAnalytics();
    logEvent(analytics, "project_link_clicked", {
      project: project.key,
      link: url,
    });
  }

  return (
    <Paper elevation={0} className="project-item">
      <div className="content">
        <h3 className="title">{t(`projects.projects.${project.key}.name`)}</h3>
        <p>{t(`projects.projects.${project.key}.description`)}</p>
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
              onClick={() => onLinkClick(link.url)}
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
