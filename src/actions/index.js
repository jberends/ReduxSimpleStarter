import axios from 'axios';

const OPENWEATHERMAP_API_KEY = 'd6b1788a6f6e10b9fc0eae45eb3c78c5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHERMAP_API_KEY}`;
const COUNTRY_CODE = 'nl';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},${COUNTRY_CODE}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

