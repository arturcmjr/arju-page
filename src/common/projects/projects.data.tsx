import EJobTitle from "../enums/job-title.enum";
import { IProject } from "./projects.interface";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ShopIcon from "@mui/icons-material/Shop";

const projects: [Key: EJobTitle, Value: IProject[]][] = [
  [
    EJobTitle.Web,
    [
      {
        name: "Todo App",
        description: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, culpa. Inventore
            accusantium repellendus incidunt esse quia autem corporis dolores possimus, ratione
            harum voluptatem. Unde tenetur eius vero consectetur sed iure consequatur tempora sint
            fugiat! Architecto dolorem neque reiciendis numquam deserunt.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima maxime vel harum
            neque! Ipsa, quam saepe illum, commodi dolore temporibus odio quae provident adipisci
            tenetur enim, nam dignissimos molestiae!
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum eos provident
            obcaecati ab amet expedita, veritatis blanditiis sunt facere, nam exercitationem. Dolore
            deserunt ratione dolor fugit earum recusandae, quod eum!
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
    ],
  ],
  [
    EJobTitle.Game,
    [
      {
        name: "Pru!",
        description: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit reiciendis
            sed sunt beatae porro voluptatum adipisci velit assumenda officia atque, quaerat vero
            eveniet a tenetur sapiente odio libero. Dolore ab maxime temporibus, quaerat
            voluptatibus explicabo, quibusdam cupiditate illo omnis porro mollitia.
          </p>
        ),
        technologies: ["Unity", "2D"],
        links: [
          {
            icon: <ShopIcon />,
            url: "https://play.google.com/store/apps/details?id=com.ArkadsGames.Pru",
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
