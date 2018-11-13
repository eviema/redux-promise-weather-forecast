import axios from 'axios';

const API_KEY = 'ab2945137323a78947af67adda4fa058';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // ES6 - template strings

export const FETCH_WEATHER = 'FETCH_WEATHER'; // for consistency across files

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},au`; // city name doesn't have be to precise.
                                            // API will do an intelligent search.
    const request = axios.get(url);
    // console.log('Request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request // returning promise as payload
    };
}
