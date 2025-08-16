import { ReactElement } from 'react';

export interface IProject {
  key: string;
  technologies: string[];
  links: IProjectLink[];
}

export interface IProjectLink { 
  icon: ReactElement;
  url: string;
}