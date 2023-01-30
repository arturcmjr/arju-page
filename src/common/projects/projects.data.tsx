// TODO: remove from common
import EJobTitle from "../enums/job-title.enum";
import { IProject } from "./projects.interface";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ShopIcon from "@mui/icons-material/Shop";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const projects: [Key: EJobTitle, Value: IProject[]][] = [
  [
    EJobTitle.Web,
    [
      {
        key: "todo",
        technologies: ["Angular", "TS", "Karma", "Firebase"],
        links: [
          {
            icon: <GitHubIcon />,
            url: "https://github.com/arturcmjr/to-do-client",
          },
          {
            icon: <LaunchIcon />,
            url: "https://todo.arju.dev",
          },
        ],
      },
      {
        key: "trivia",
        technologies: ["React", "JS", "Tailwind CSS", "Open Trivia API"],
        links: [
          {
            icon: <GitHubIcon />,
            url: "https://github.com/arturcmjr/quiz-react",
          },
          {
            icon: <LaunchIcon />,
            url: "https://quiz.arju.dev/",
          },
        ],
      },
      {
        key: "secret_santa",
        technologies: ["Angular", "TS", "Firebase"],
        links: [
          {
            icon: <GitHubIcon />,
            url: "https://github.com/arturcmjr/secret-santa",
          },
          {
            icon: <LaunchIcon />,
            url: "https://secreto.arju.dev/",
          },
        ],
      },
      {
        key: "portfolio",
        technologies: ["React", "TS"],
        links: [
          {
            icon: <GitHubIcon />,
            url: "https://github.com/arturcmjr/arju-page",
          },
        ],
      },
    ],
  ],
  [
    EJobTitle.Game,
    [
      {
        key: "pru",
        technologies: ["Unity", "Mobile", "Vectorial"],
        links: [
          {
            icon: <ShopIcon />,
            url: "https://play.google.com/store/apps/details?id=com.ArkadsGames.Pru",
          },
        ],
      },
      {
        key: "jimmy_gunner",
        technologies: ["Unity", "Mobile", "Voxel Art"],
        links: [
          {
            icon: <YouTubeIcon />,
            url: "https://www.youtube.com/watch?v=lLH-csBR1iU",
          },
        ],
      },
      {
        key: "slime_run",
        technologies: ["Unity", "Mobile", "Pixel Art"],
        links: [
          {
            icon: <TwitterIcon />,
            url: "https://twitter.com/arkadsgames/status/1118185993918668805?s=20&t=ZSf5pCcbnu6NEDz6JuWW0g",
          },
        ],
      },
    ],
  ],
];

export function getProjects(title: EJobTitle): IProject[] {
  const found = projects.find(([key]) => key === title);
  return found?.[1] || [];
}

export default getProjects;
