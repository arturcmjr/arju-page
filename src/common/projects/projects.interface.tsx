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