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
}

export const experiences: IExperience[] = [
  {
    company: "Round Stars",
    translationKey: "roundstars",
    dateRange: "2017 - 2018",
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
  },
  {
    company: "ADRA Brasil",
    translationKey: "adra_brasil",
    dateRange: "2018 - 2020",
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
  },
  {
    company: "Adven.Tech",
    translationKey: "adven_tech",
    dateRange: "2020 - 2022",
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
  },
  {
    company: "Autotrac",
    translationKey: "autotrac",
    dateRange: `2022 - ${i18next.t("common.date.present")}`,
    icon: <WorkOutlineOutlinedIcon fontSize="small" />,
  },
  {
    company: "IESB",
    translationKey: "iesb",
    dateRange: "2016 - 2018",
    icon: <SchoolOutlinedIcon fontSize="small" />,
  },
  {
    company: "Descomplica",
    translationKey: "descomplica",
    dateRange: "2021 - 2022",
    icon: <SchoolOutlinedIcon fontSize="small" />,
  },
  {
    company: "Arkads Games",
    translationKey: "arkads_games",
    dateRange: "2017 - Present",
    icon: <FavoriteBorderOutlinedIcon fontSize="small" />,
  },
];

export default experiences;
