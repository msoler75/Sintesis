import antlr4 from "antlr4";
import { loadLocales, translate } from "./lang/locale.js";

export class SintesisErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
    // console.error(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
    throw new SyntaxError(
      JSON.stringify({
        msg,
        start: offendingSymbol.start,
        stop: offendingSymbol.stop,
        line,
        column,
      })
    );
  }
  Error(msg) {
    console.error(`${msg}`);
  }
}

function findNumber(obj, key) {
  if (typeof obj[key] === "object") return findNumber(obj[key], key);
  return obj[key];
}

export class SintesisError {
  constructor(category, context, msg, ...args) {
    this.category = category ? category : "error durante la ejecución";
    this.context = context;
    this.msg = msg;
    this.args = args;
    //this.throw new Error(JSON.stringify({msg, start: context.start, stop: context.stop, line, column}))
    this.start = findNumber(context, "start");
    this.stop = findNumber(context, "stop");
    this.line =
      typeof context.line === "number"
        ? context.line
        : findNumber(context.start, "line");
    this.column =
      typeof context.column === "number"
        ? context.column
        : findNumber(context.start, "column");
  }
}

export const handleError = async (code, err) => {
  if (err instanceof SyntaxError) {
    const data = JSON.parse(err.message);
    const m1 = data.msg.match("no viable alternative at input '(.*)'")
    const m2 = data.msg.match("mismatched input '(.+?)' expecting (.+)")
    if(m1)
    {
        data.msg = "no se esperaba '%s'"
        data.args = [m1[1]]
        if(data.args[0]=='<EOF>')
        data.args[0] = await translate('<fin de archivo>')
    }
    else if(m2) {
        data.msg = "no se esperaba '%s'"
        data.args = [m2[1]]
        // if(data.args[0]=='<EOF>')
        // data.args[0] = await translate('<fin de archivo>')
    }
      /*.replace("extraneous", await translate("extrana"))
      .replace("input", await translate("entrada"))
      .replace("expecting", await translate("se esperaba"))
      .replace("mismatched", await translate("no coincide"))
      .replace("alternative", await translate("alternativa"))
      .replace(/\bat\b/g, await translate("en"))
      .replace("missing", await translate("se esperaba")) */

    printError(code, (await translate("error de sintaxis")) + ":", data);
  } else if (err instanceof SintesisError) {
    //SintesisError
    printError(code, (await translate(err.category)) + ":", err);
  } else console.error(err);
};

const ucfirst = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const printError = async (code, titulo, err) => {
  const lines = code.split("\n");
  let line = lines[err.line - 1];
  if(!err.args)
  err.args = []
  let numline = ucfirst(await translate("línea")) + " " + err.line + ":   ";
  console.log(numline + line);
  console.log(
    " ".repeat(numline.length + err.column) +
      "^".repeat(err.stop - err.start + 1)
  );
  console.log(
    ucfirst(titulo),
    await translate(err.msg, ...err.args)
  );
};
