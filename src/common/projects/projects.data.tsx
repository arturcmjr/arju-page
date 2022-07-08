import EJobTitle from "../enums/job-title.enum";
import { IProject } from "./projects.interface";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const projects: [Key: EJobTitle, Value: IProject[]][] = [
  [
    EJobTitle.Web,
    [
      {
        name: "Todo App",
        description: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            culpa. Inventore accusantium repellendus incidunt esse quia autem
            corporis dolores possimus, ratione harum voluptatem. Unde tenetur
            eius vero consectetur sed iure consequatur tempora sint fugiat!
            Architecto dolorem neque reiciendis numquam deserunt.
          </p>
        ),
        technologies: ["Angular", "TS", "Karma", "Firebase"],
        links: [
          {
            icon: <GitHubIcon />,
            url: "https://github.com/arturcmjr/to-do-client",
          },
          {
            icon: <LaunchIcon />,
            url: "https://arju-todo.web.app",
          },
        ],
      },
      {
        name: "Trivia Game",
        description: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima
            maxime vel harum neque! Ipsa, quam saepe illum, commodi dolore
            temporibus odio quae provident adipisci tenetur enim, nam
            dignissimos molestiae!
          </p>
        ),
        technologies: ["React", "JS", "Tailwind CSS", "Open Trivia API"],
        links: [
          {
            icon: <GitHubIcon />,
            url: "https://github.com/arturcmjr/quiz-react",
          },
          {
            icon: <LaunchIcon />,
            url: "https://arju-quiz.web.app/",
          },
        ],
      },
    ],
  ],
];

export function getProjects(title: EJobTitle): IProject[] {
  return projects[title]?.[1] || [];
}

export default getProjects;
