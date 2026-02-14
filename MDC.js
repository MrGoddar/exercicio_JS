function calcularMDC(a, b) {
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

console.log("O MDC de 24 e 18 é:", calcularMDC(24, 18));

module.exports = calcularMDC;