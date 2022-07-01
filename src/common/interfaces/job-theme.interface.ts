export interface IJobTheme {
  primaryColor: string;
  skills: ISkill[];
  projects: IProject[];
}

export interface ISkill {
  name: string;
  star: boolean;
}

export interface IProject {
  name: string;
  description: JSX.Element;
  technologies: string[];
  links: IProjectLink[];
}

export interface IProjectLink { 
  icon: JSX.Element;
  url: string;
}

export default IJobTheme;