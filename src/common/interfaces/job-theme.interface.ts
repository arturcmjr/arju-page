export interface IJobTheme {
  primaryColor: string;
  skills: ISkill[];
}

export interface ISkill {
  name: string;
  star: boolean;
}

export default IJobTheme;