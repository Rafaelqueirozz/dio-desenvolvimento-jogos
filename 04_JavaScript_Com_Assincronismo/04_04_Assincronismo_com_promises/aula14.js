// Async e Await

const fs = require ('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'aula13.csv');

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf-8')
        console.log(textoDoArquivo)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Finalizou!')
    }
}

buscarArquivo();