import exec from "./lib/exec.js";
import fs from "fs";
import {handleError} from "./src/SintesisError.js";
import {defineTranslateCallback, translate} from './src/lang/SintesisLang.js'
import { translateI18 } from "./lang/locale.js";

defineTranslateCallback(translateI18)

const ucfirst = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

async function main() {
  const command_arg = process.argv[2];

  if (!command_arg) {
    console.log(ucfirst(await translate("debes especificar un archivo o un programa")));
  } else {
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
      try {
        const r = exec(sintesis_code);
        console.log(r)
      } catch (err) {
        handleError(sintesis_code, err)
      }
    }
  }
}

main();