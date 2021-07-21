import {callAPI, getWeatherStringFromCode} from '../src/functions';

describe('Weather string', () => {
    it('should return a string', () => {
        expect(typeof getWeatherStringFromCode(0)).toBe('string')
    })
    it('should return a sunny', () => {
        expect(getWeatherStringFromCode(0)).toBe('SUNNY')
    })
})

describe('API', () => {
    it('shoult be a 200', () => {

        global.fetch = jest.fn(() => {
            Promise.resolve();
         });

        let weather = callAPI();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(weather).toMatchObject({})
    })
})