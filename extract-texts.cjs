const fs = require("fs");
const unidecode = require("unidecode");
const regex = /this\.t\((".*?")/g;
const archivos = ["src/SintesisEval.js", "src/SintesisSymbolParser.js"];
const archivoSalida = "textos.sql";
const resultados = [];

for (const archivo of archivos) {
  const texto = fs.readFileSync(archivo, "utf-8");
  let match;

  while ((match = regex.exec(texto))) {
    const valor = match[1];
    const slug = unidecode(valor.toLowerCase()).replace(/ /g, "-");
    resultados.push(`${valor}, ${slug.replace(/'?%[ds]'?-?|-?'?%[ds]'?/g, '')}`);
  }
}
fs.writeFileSync(archivoSalida, resultados.join("\n"));
