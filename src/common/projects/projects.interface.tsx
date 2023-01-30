export interface IProject {
  key: string;
  technologies: string[];
  links: IProjectLink[];
}

export interface IProjectLink { 
  icon: JSX.Element;
  url: string;
}