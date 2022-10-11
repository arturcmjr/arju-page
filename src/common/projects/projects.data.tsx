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
        name: "Todo App",
        description: (
          <p>
            It's a simple To-Do app. I made it mainly to show my technical knowledge of the Angular
            framework. It has unit tests for basic functionalities, is mobile-first designed, has
            PWA support, and uses firebase's realtime database.
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
            url: "https://todo.arju.dev",
          },
        ],
      },
      {
        name: "Trivia Game",
        description: (
          <p>
            This one makes use of Tailwind css and React. It is a simple quiz game powered by Open
            Trivia Database. It allows you to choose a topic, time limit and others settings to
            customize your experience.
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
            url: "https://quiz.arju.dev/",
          },
        ],
      },
      {
        name: "Secret Santa",
        description: (
          <p>
            This one may be the simplest here. I made it to help with my family's holiday Secret
            Santa. It allows you quick create one and send the links to the participants so they can
            see who they got.
          </p>
        ),
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
        name: "My Portfolio",
        description: (
          <p>
            Its main objective is to show some of my projects and talk a little about me. It uses
            SendingBlue for contact and a single cloud function to keep it safe.
          </p>
        ),
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
        name: "Pru!",
        description: (
          <p>
            Pru! is an "infinity runner" of a pigeon who needs to eat food and score by hitting
            people with its poop while avoiding obstacles. It was the first game that I made back in
            college. It has gone through some changes since I first thought about it.
          </p>
        ),
        technologies: ["Unity", "Mobile", "Vectorial"],
        links: [
          {
            icon: <ShopIcon />,
            url: "https://play.google.com/store/apps/details?id=com.ArkadsGames.Pru",
          },
        ],
      },
      {
        name: "Jimmy Gunner",
        description: (
          <>
            <p>
              It is a shooter that I made while playing with voxel art back in college. It is the
              game that gave me the best game of the semester award. I tried to remade it some years
              later but left this idea aside because of the number of similar games available.{" "}
              <br />
              <br />
              <small>
                The game isn't at the Play Store anymore. So there is the link to the trailer
                instead.
              </small>
            </p>
          </>
        ),
        technologies: ["Unity", "Mobile", "Voxel Art"],
        links: [
          {
            icon: <YouTubeIcon />,
            url: "https://www.youtube.com/watch?v=lLH-csBR1iU",
          },
        ],
      },
      {
        name: "Slime Run",
        description: (
          <>
            <p>
              The game is about a world invaded by slimes. The hero's job is to get rid of them by
              jumping on their head while running, gliding and collecting coins to be used later on
              outfits.
              <br />
              <br />
              <small>
                The game isn't at the Play Store anymore. So there is the link to a twitter post
                instead.
              </small>
            </p>
          </>
        ),
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
