import { random } from '../../JuegoDeLaVida';

describe('Función crear células', () => {
    test('Crea la matriz correctamente', () => {
        expect(random(4, 8)).not.toBe(3);
    })
});
