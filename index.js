const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'O CAMINHO ESTÁ ERRADO!'))
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
    if (erro) {
      trataErro(erro);
    }
    console.log(chalk.green(texto));
  })
}

pegaArquivo('./arquivos/texto1.md')