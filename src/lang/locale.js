import i18next from "i18next";
import backend from "i18next-fs-backend";
import i18nextMiddleware from "i18next-express-middleware";
import path from "path";
import { fileURLToPath } from "url";
import { sprintf } from "../utils/Print.js";

var loaded = false;



export const loadLocales = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentDirPath = path.dirname(currentFilePath);
  const localesPath = path.join(currentDirPath, "./locales", "{{lng}}.json");

  return await i18next
    .use(i18nextMiddleware.LanguageDetector)
    .use(backend)
    .init({
      // lng: "en", // if you're using a language detector, do not define the lng option
      debug: false,
      fallbackLng: "es",
      supportedLngs: ["en", "es"],
      backend: {
        loadPath: localesPath,
      },
    })
    .then(() => {
      loaded = true;
    });
};

export const _t = async (slug) => {
  // cargamos las traducciones en caso de ser necesario
  if (!loaded) 
    await loadLocales();
  return i18next.t(slug);
};

const acentos = {
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u",
  Á: "A",
  É: "E",
  Í: "I",
  Ó: "O",
  Ú: "U",
  ñ: "n",
  Ñ: "N",
};

export const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    // .normalize("NFD") // separate accent from letter
    .replace(/[áéíóúÁÉÍÓÚñÑ]/g, (match) => acentos[match])
    .replace(/[\u0300-\u036f]/g, "") // remove all separated accents
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/&/g, "-and-") // replace & with 'and'
    .replace(/[^\w\-]+/g, "") // remove all non-word chars
    .replace(/\-\-+/g, "-"); // replace multiple '-' with single '-'

export const translate = async (str, ...args) => {
  // convertimos a slug, y quitamos los %s y %d:

  //console.log('translate', str, args)
  const slug = slugify(str.replace(/'?%[ds]'?\s?|\s?'?%[ds]'?/g, ""));
  // obtenemos la cadena traducida de la base de datos
  return sprintf(await _t(slug), ...args);
};
