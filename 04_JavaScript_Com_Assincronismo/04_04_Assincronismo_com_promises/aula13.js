// Manipulando arquivos através de promises

const { error } = require('console');
const fs = require('fs');

const promessaLeituraArquivo = fs.promises.readFile('aula13.csv')

promessaLeituraArquivo
.then((arquivo) => arquivo.toString('utf8'))
.then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
.then((lihasSemCabecalho) => lihasSemCabecalho.map((linha) => {
    const [nome, feito] = linha.split(';')
    return {
        nome,
        feito: feito.trim() === 'true'
    }
}))
.then((listaDeTarefas) => console.log(listaDeTarefas))
.catch((error) => console.log('Deu ruim!', error))