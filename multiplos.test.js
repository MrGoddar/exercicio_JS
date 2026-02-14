const somarMultiplos = require('./multiplos');

test('Deve retornar a soma correta dos múltiplos', () => {
    expect(somarMultiplos()).toBe(156361);
});