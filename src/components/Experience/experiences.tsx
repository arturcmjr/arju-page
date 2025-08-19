import i18next from "i18next";

export interface IExperience {
  company: string;
  translationKey: string;
  dateRange: string;
}

export const experiences: IExperience[] = [
  {
    company: "Round Stars",
    translationKey: "roundstars",
    dateRange: "2017 - 2018",
  },
  {
    company: "ADRA Brasil",
    translationKey: "adra_brasil",
    dateRange: "2018 - 2020",
  },
  {
    company: "Adven.Tech",
    translationKey: "adven_tech",
    dateRange: "2020 - 2022",
  },
  {
    company: "Autotrac",
    translationKey: "autotrac",
    dateRange: `2022 - ${i18next.t("common.date.present")}`,
  },
  {
    company: "IESB",
    translationKey: "iesb",
    dateRange: "2016 - 2018",
  },
  {
    company: "Descomplica",
    translationKey: "descomplica",
    dateRange: "2021 - 2022",
  },
  {
    company: "Arkads Games",
    translationKey: "arkads_games",
    dateRange: "2017 - Present",
  },
];

export default experiences;
