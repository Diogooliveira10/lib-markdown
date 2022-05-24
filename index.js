const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'O CAMINHO ESTÁ ERRADO!'))
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  fs.promises
  .readFile(caminhoDoArquivo, encoding)
  .then((texto) => console.log(chalk.green(texto)))
  .catch((erro) => trataErro(erro))
}

pegaArquivo('./arquivos/texto1.md')