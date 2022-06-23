export interface ISkill {
  name: string;
  star: boolean;
  type: "web" | "mobile" | "game";
}

export const skills: ISkill[] = [
  {
    name: "HTML",
    star: true,
    type: "web",
  },
  {
    name: "CSS",
    star: false,
    type: "web",
  },
  {
    name: "JavaScript",
    star: false,
    type: "web",
  },
  {
    name: "Unity",
    star: true,
    type: "game",
  },
  {
    name: "SCSS",
    star: false,
    type: "web",
  },
  {
    name: "TypeScript",
    star: true,
    type: "web",
  },
  {
    name: "React",
    star: false,
    type: "web",
  },
  {
    name: "Angular",
    star: true,
    type: "web",
  },
  {
    name: "Vue",
    star: false,
    type: "web",
  },
  {
    name: "Node",
    star: false,
    type: "web",
  },
  {
    name: "Git",
    star: false,
    type: "web",
  },
  {
    name: "C#",
    star: true,
    type: "game",
  },
  {
    name: "Java",
    star: false,
    type: "mobile",
  },
  {
    name: "PHP",
    star: false,
    type: "web",
  },
  {
    name: "SQL",
    star: true,
    type: "web",
  },
  {
    name: ".NET",
    star: true,
    type: "web",
  },
  {
    name: "Laravel",
    star: false,
    type: "web",
  },
  {
    name: "Express",
    star: false,
    type: "web",
  },
  {
    name: "Flutter",
    star: false,
    type: "mobile",
  },
  {
    name: "Android Native",
    star: false,
    type: "mobile",
  },
  {
    name: "Dart",
    star: false,
    type: "mobile",
  },
  {
    name: "Bash/Shell",
    star: false,
    type: "web",
  },
];