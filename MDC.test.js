const calcularMDC = require('./MDC');

test('Deve calcular o MDC de 24 e 18 como 6', () => {
    expect(calcularMDC(24, 18)).toBe(6);
});