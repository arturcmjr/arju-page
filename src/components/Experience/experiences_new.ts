import i18next from "i18next";

export interface IExperience {
  company: string;
  dateRange: string;
  key: string;
}

export const work: IExperience[] = [
  {
    company: "Autotrac",
    key: "autotrac",
    dateRange: `2022 - ${i18next.t("common.date.present")}`,
  },
  {
    company: "Adven.Tech",
    key: "adven_tech",
    dateRange: "2020 - 2022",
  },
  {
    company: "ADRA Brasil",
    key: "adra_brasil",
    dateRange: "2018 - 2020",
  },
  {
    company: "Round Stars",
    key: "roundstars",
    dateRange: "2017 - 2018",
  },
];

export const education: IExperience[] = [
  {
    company: "Descomplica",
    key: "descomplica_systems",
    dateRange: "2021 - 2022",
  },
  {
    company: "Descomplica",
    key: "descomplica_mobile",
    dateRange: "2021 - 2022",
  },
  {
    company: "Descomplica",
    key: "computer_science",
    dateRange: "2023 - 2025",
  },
  {
    company: "IESB",
    key: "iesb",
    dateRange: "2016 - 2018",
  },
];
