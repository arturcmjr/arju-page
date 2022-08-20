import { EJobTitle } from "../enums/job-title.enum";
import ISkill from "./skills.interface";

const skills: [Key: EJobTitle, Value: ISkill[]][] = [
  [
    EJobTitle.Web,
    [
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
