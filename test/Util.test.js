import { fmtDate } from '../app/api/Util'

describe('Util module', () => {

    test('Should format date string', () => {
        expect(fmtDate('06012019')).toBe('06/01/2019')
        expect(() => fmtDate(new Date()) ).toThrow()
        expect(() => fmtDate('0601201')).toThrow()
        expect(() => fmtDate('0601201a')).toThrow()
    })

})