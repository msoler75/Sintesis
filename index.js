import exec from "./lib/exec.js";
import fs from "fs";
import SintesisError from "./src/SintesisError.js";
import {loadLocales, translate, _t} from './lib/locale.js'

const ucfirst = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}




loadLocales().then(()=>{

  const command_arg = process.argv[2];

  if (!command_arg) {
    console.log(ucfirst(_t("args-expected")));
    process.exit();
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

    function mostrarError(titulo, err) {
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
        .replace("no viable alternative at input", _t("no-se-esperaba"))
          .replace("extraneous", _t("extrana"))
          .replace("input", _t("entrada"))
          .replace("expecting", _t("se-esperaba"))
          .replace("mismatched", _t("no-coincide"))
          .replace("alternative", _t("alternativa"))
          .replace(/\bat\b/, _t("en"))
          .replace("missing", _t("se-esperaba"))
      );
    }

    try {
      console.log(exec(sintesis_code, translate));
    } catch (err) {
      if (err instanceof SyntaxError) {
        const data = JSON.parse(err.message);
        mostrarError(_t("error-sintaxis") + ":", data);
      } else if (err instanceof SintesisError) {
        //SintesisError
        mostrarError(_t("error-ejecucion") + ":", err);
      } else console.error(err);
    }
  }

})