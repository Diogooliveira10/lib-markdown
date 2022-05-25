const chalk = require('chalk');
const fs = require('fs');

const texto = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento, a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégios podem criar objetos File representando qualquer arquivo local sem a interação do usuário (veja [Implementation](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) notes para mais informações).'

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const linksExtraidos = texto.match(regex);
  console.log(linksExtraidos);
}

extraiLinks(texto);

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'O CAMINHO ESTÁ ERRADO!'));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto))
  } catch(erro) {
    trataErro(erro);
  }
}

// pegaArquivo('./arquivos/texto1.md')