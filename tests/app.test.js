import {callAPI, getWeatherStringFromCode, renderOnline,renderHTML, getWeatherTextFromString} from '../src/functions';

describe('Weather string', () => {
    it('should return a string', () => {
        expect(typeof getWeatherStringFromCode(0)).toBe('string')
    })
    it('should return a sunny', () => {
        expect(getWeatherStringFromCode(0)).toBe('SUNNY')
    })
    it('should return a cloudy', () => {
        expect(getWeatherStringFromCode(1)).toBe('CLOUDY')
        expect(getWeatherStringFromCode(40)).toBe('CLOUDY')
    })

    it('should return unknown', () => {
        expect(getWeatherStringFromCode(3)).toBe('UNKNOWN')
    })

    it('should return notset', () => {
        expect(getWeatherStringFromCode()).toBe('NOTSET')
    })

    it('should return yes', () => {
        expect(getWeatherTextFromString('SUNNY')).toBe('Yes, it is !')
    })

    it('should return notset', () => {
        expect(getWeatherTextFromString('NOTSET')).toBe('Checking status...')
    })

    it('should return not...', () => {
        expect(getWeatherTextFromString('CLOUDY')).toMatch(/Not/)
    })
})



/*
**Simulation du DOM**
Jest est livré avec jsdom qui simule un environnement DOM comme si vous étiez dans le navigateur. 
Cela signifie que chaque API du DOM que nous appelons peut être observée de la même manière qu'elle le serait dans un navigateur
*/

document.body.innerHTML =
    '<div>' +
    '  <span id="js-online" />'+
    '  <span id="js-bg-container" />'+
    '  <span id="js-text-title" />'+
    '  <span id="js-text-toto" />'+
    '</div>';


describe('DOM', () => {

    it('should show offline', () => {  
        renderOnline(false);
        expect(document.getElementById('js-online').innerText).toEqual('Your are offline')
    })

    it('should show online', () => {  
        renderOnline(true);
        expect(document.getElementById('js-online').innerText).toEqual('Your are online')
    })

    it('should render HTML', () => {
       renderHTML('str', "RENDER HTML");
       expect(document.getElementById('js-text-title').innerText).toEqual('RENDER HTML')
    })
})


describe('DOM/V2', () => {

    it('should render HTML', () => {
        renderHTML('str', "RENDER TOTO");
        expect(document.getElementById('js-text-title').innerText).toEqual('RENDER TOTO')
     })


    it('should render HTML', () => {
        renderHTML('str', "RENDER");
        expect(document.getElementById('js-text-title').innerText).toEqual('RENDER')
     })
})
/*
describe('API', () => {
    it('shoult be a 200', () => {

        global.fetch = jest.fn(() => {
            Promise.resolve();
         });

        let weather = callAPI();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(typeof weather).toBe('object')
    })
})*/