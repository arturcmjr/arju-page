import { Resource } from "i18next";

export const translationEN = {
  introduction: {
    hi: "Hi, my name is",
    job: {
      before: "",
      and: " and ",
      after: " Developer",
      web: "Web",
      game: "Game",
    },
    short:
      "I'm a software developer who can work well on every development layer. I live next to Brasília, Brazil. I'm open to job offers on-site nearby or remotely anywhere around the globe.",
  },
};

export const translationPTBR = {
  introduction: {
    hi: "Oi, meu nome é",
    job: {
        before: "Desenvolvedor ",
        and: " e ",
        after: "",
        web: "Web",
        game: "Jogos",
      },
    short:
      "I'm a software developer who can work well on every development layer. I live next to Brasília, Brazil. I'm open to job offers on-site nearby or remotely anywhere around the globe.",
  },
};

export const translation: Resource = {
  en: { translation: translationEN },
  "en-US": { translation: translationEN },
  pt: { translation: translationPTBR },
  "pt-BR": { translation: translationPTBR },
};

export default translation;
