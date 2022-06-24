import EJobTitle from "../enums/job-title.enum";

export interface IJobTheme {
  title: EJobTitle;
  primaryColor: string;
  skills: ISkill[];
}

export interface ISkill {
  name: string;
  star: boolean;
}

export default IJobTheme;