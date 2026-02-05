let numeros = [10, 5, 20, 1, 8];

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

console.log("Índice do maior valor:", maiorIndice);
console.log("Índice do menor valor:", menorIndice);