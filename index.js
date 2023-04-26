import exec from "./lib/exec.js";
import fs from "fs";
import SintesisError from "./src/SintesisError.js";
import {i18t} from './locale.js'
const command_arg = process.argv[2];

if (!command_arg) {
  console.log("Debes especificar un archivo o un programa");
  process.exit();
}

const ucfirst = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}


let sintesis_code = command_arg;
let file = command_arg;
if (file.match(/.*\.s(in|intesis)?$/) || fs.existsSync(file)) {
  try {
    sintesis_code = fs.readFileSync(file, "utf8");
  } catch (err) {
    console.log(`Error al leer el archivo ${file}`);
    process.exit();
  }
}

if (sintesis_code) {
  const lines = sintesis_code.split("\n");

  async function mostrarError(titulo, err) {
    let line = lines[err.line - 1];
    let numline = "Línea " + err.line + ":   ";
    console.log(numline + line);
    console.log(
      " ".repeat(numline.length + err.column) +
        "^".repeat(err.stop - err.start + 1)
    );
    console.log(
      ucfirst(titulo),
      err.msg
      .replace("no viable alternative at input", await i18t("no-se-esperaba"))
        .replace("extraneous", await i18t("extrana"))
        .replace("input", await i18t("entrada"))
        .replace("expecting", await i18t("se-esperaba"))
        .replace("mismatched", await i18t("no-coincide"))
        .replace("alternative", await i18t("alternativa"))
        .replace(/\bat\b/, await i18t("en"))
        .replace("missing", await i18t("se-esperaba"))
    );
  }

  try {
    console.log(exec(sintesis_code));
  } catch (err) {
    if (err instanceof SyntaxError) {
      const data = JSON.parse(err.message);
      await mostrarError(await i18t("error-sintaxis") + ":", data);
    } else if (err instanceof SintesisError) {
      //SintesisError
      await mostrarError(await i18t("error-ejecucion") + ":", err);
    } else console.error(err);
  }
}
