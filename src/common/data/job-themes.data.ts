import IJobTheme from "../interfaces/job-theme.interface";

export const webTheme: IJobTheme = {
  primaryColor: "#4ecca3",
  skills: [
    {
      name: "HTML",
      star: true,
    },
    {
      name: "CSS",
      star: false,
    },
    {
      name: "TypeScript",
      star: true,
    },
    {
      name: "JavaScript",
      star: false,
    },
    {
      name: "SCSS",
      star: false,
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
      name: "Node",
      star: false,
    },
    {
      name: "Git",
      star: false,
    },
    {
      name: "Bash/Shell",
      star: false,
    },
  ],
};

export const gameTheme: IJobTheme = {
  primaryColor: "#cf9638",
  skills: [
    {
      name: "HTML",
      star: true,
    },
  ],
};

export const mobileTheme: IJobTheme = {
  primaryColor: "#A989FB",
  skills: [
    {
      name: "HTML",
      star: true,
    },
  ],
};
