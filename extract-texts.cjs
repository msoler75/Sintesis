const fs = require("fs");
const unidecode = require("unidecode");
const regex = /this\.t\((".*?")/g;
const archivosEntrada = ["src/SintesisEval.js", "src/SintesisSymbolParser.js"];
const archivoSalida = "textos.sql";
const resultados = [];


if (fs.existsSync(archivoSalida)) {
  console.log(`El archivo '${archivoSalida}' ya existe. No se ha creado un nuevo archivo ni se han modificado los originales.`);
  process.exit();
}

const filasUnicas = new Set();

for (const archivoEntrada of archivosEntrada) {
  var texto = fs.readFileSync(archivoEntrada, "utf-8");
  let match;

  while ((match = regex.exec(texto))) {
    const valor = match[1];
    const slug = unidecode(valor.toLowerCase()).replace(/ /g, "-").replace(/'?%[ds]'?-?|-?'?%[ds]'?/g, '');
    texto = texto.replace(valor, slug);
    const linea = `${valor}, ${slug}`
    filasUnicas.add(linea);
  }

  fs.writeFileSync(archivoEntrada, texto);
}
fs.writeFileSync(archivoSalida, Array.from(filasUnicas).join("\n"));
