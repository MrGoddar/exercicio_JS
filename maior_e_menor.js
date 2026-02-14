function encontrarIndices(numeros) {
    let maiorIndice = 0;
    let menorIndice = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[maiorIndice]) {
            maiorIndice = i;
        }
        if (numeros[i] < numeros[menorIndice]) {
            menorIndice = i;
        }
    }

    return { maiorIndice, menorIndice };
}

const listaExemplo = [10, 5, 20, 1, 8];
const resultado = encontrarIndices(listaExemplo);
console.log("Índice do maior valor:", resultado.maiorIndice);
console.log("Índice do menor valor:", resultado.menorIndice);

module.exports = encontrarIndices;