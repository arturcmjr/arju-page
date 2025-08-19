import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import i18next from "i18next";
import { ReactElement } from "react";

export interface IExperience {
  company: string;
  translationKey: string;
  dateRange: string;
  icon: ReactElement;
  keyTech: string[];
}

export const experiences: IExperience[] = [
  {
    company: "Autotrac",
    translationKey: "autotrac",
    dateRange: `2022 - {NOW}`,
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    keyTech: ["Angular", "TypeScript", "SQL", "C#", ".NET"]
  },
  {
    company: "Adven.Tech",
    translationKey: "adven_tech",
    dateRange: "2020 - 2022",
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    keyTech: ["Angular", "TypeScript", "React", "C#", ".NET"]
  },
  {
    company: "ADRA Brasil",
    translationKey: "adra_brasil",
    dateRange: "2018 - 2020",
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    keyTech: ["Illustrator", "Photoshop", "VBA", "SQL"]
  },
  {
    company: "Round Stars",
    translationKey: "roundstars",
    dateRange: "2017 - 2018",
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    keyTech: ["Unity", "C#", "PHP"]
  },
  {
    company: "Descomplica",
    translationKey: "descomplica_systems",
    dateRange: "2021 - 2022",
    icon: <SchoolOutlinedIcon fontSize="small" />,
    keyTech: ["C++", "Java"]
  },
  {
    company: "Descomplica",
    translationKey: "descomplica_mobile",
    dateRange: "2021 - 2022",
    icon: <SchoolOutlinedIcon fontSize="small" />,
    keyTech: ["React Native", "Flutter", "Java", "Swift"]
  },
  {
    company: "IESB",
    translationKey: "iesb",
    dateRange: "2016 - 2018",
    icon: <SchoolOutlinedIcon fontSize="small" />,
    keyTech: ["Unity", "C#", "Blender"]
  },
  {
    company: "Descomplica",
    translationKey: "descomplica_cc",
    dateRange: "2023 - 2025",
    icon: <SchoolOutlinedIcon fontSize="small" />,
    keyTech: ["C++", "Python", "Java"]
  }
];

export default experiences;
