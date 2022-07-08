import EJobTitle from "../enums/job-title.enum";
import IJobTheme from "./job-theme.interface";

const themes: [Key: EJobTitle, Value: IJobTheme][] = [
  [
    EJobTitle.Web,
    {
      primaryColor: "#4ecca3",
    },
  ],
  [
    EJobTitle.Mobile,
    {
      primaryColor: "#9fd15f",
    },
  ],
  [
    EJobTitle.Game,
    {
      primaryColor: "#e2a84b",
    },
  ],
];

export function getTheme(title: EJobTitle): IJobTheme {
  const found = themes.find(([key]) => key === title);
  return found?.[1] || themes[0][1];
}
