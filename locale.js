import i18next from "i18next";
import backend from "i18next-fs-backend";

let loaded = false;

async function load() {
    await i18next.use(backend).init({
        lng: "en", // if you're using a language detector, do not define the lng option
        debug: false,
        fallbackLng: "es",
        supportedLngs: ["en", "es"],
        backend: {
            loadPath: "locales/{{lng}}.json",
        },
    });
    loaded = true
}


export const i18t = async (slug) => {
  if (!loaded) {
    // Si las traducciones no se han cargado, llamar a la función load()
    await load()
  }
  return i18next.t(slug)
};