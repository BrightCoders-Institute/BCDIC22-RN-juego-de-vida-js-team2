const { random2 } = require('./JuegoDeLaVida')

describe('Función random', () => {
    test('Muestra número random', () => {
        // actual test
        const array = []
        const num1 = 4
        const num2 = 8
        expect(random(num1, num2)).not.toEqual(array)
    })
})