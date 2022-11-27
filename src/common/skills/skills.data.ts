import { EJobTitle } from "../enums/job-title.enum";
import ISkill from "./skills.interface";

const skills: [Key: EJobTitle, Value: ISkill[]][] = [
  [
    EJobTitle.Web,
    [
      {
        name: "C#",
        star: true,
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
        name: "SQL",
        star: true,
      },
      {
        name: ".NET",
        star: true,
      },
    ],
  ],
  [
    EJobTitle.Game,
    [
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
  ],
];

export function getSkills(title: EJobTitle): ISkill[] {
  const found = skills.find(([key]) => key === title);
  return found?.[1] || [];
}
