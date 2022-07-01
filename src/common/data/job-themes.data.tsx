import IJobTheme from "../interfaces/job-theme.interface";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export const webTheme: IJobTheme = {
  primaryColor: "#4ecca3",
  skills: [
    {
      name: "JavaScript",
      star: false,
    },
    {
      name: "TypeScript",
      star: true,
    },
    {
      name: "React",
      star: false,
    },
    {
      name: "Angular",
      star: true,
    },
    {
      name: "Vue",
      star: false,
    },
    {
      name: ".NET",
      star: true,
    },
  ],
  projects: [
    {
      name: "Todo App",
      description: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, culpa.
          Inventore accusantium repellendus incidunt esse quia autem corporis
          dolores possimus, ratione harum voluptatem. Unde tenetur eius vero
          consectetur sed iure consequatur tempora sint fugiat! Architecto
          dolorem neque reiciendis numquam deserunt.
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
          temporibus odio quae provident adipisci tenetur enim, nam dignissimos
          molestiae!
        </p>
      ),
      technologies: ["React", "JS", "Open Trivia API"],
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
};

export const gameTheme: IJobTheme = {
  primaryColor: "#cf9638",
  skills: [
    {
      name: "Unity",
      star: true,
    },
    {
      name: "C#",
      star: true,
    },
    {
      name: "Blender",
      star: false,
    },
  ],
  projects: [],
};

export const mobileTheme: IJobTheme = {
  primaryColor: "#9fd15f",
  skills: [
    {
      name: "HTML",
      star: true,
    },
  ],
  projects: [],
};
