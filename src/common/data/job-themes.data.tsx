import IJobTheme from "../interfaces/job-theme.interface";

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
    }
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
