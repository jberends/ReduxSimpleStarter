import axios from 'axios';
import {FETCH_WEATHER} from "./enums";

const OPENWEATHERMAP_API_KEY = 'd6b1788a6f6e10b9fc0eae45eb3c78c5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHERMAP_API_KEY}`;
const COUNTRY_CODE = 'nl';


// generates an action object of type with payload (the request promise)
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},${COUNTRY_CODE}`;
    const request = axios.get(url);

    console.log('Request:',request);


    // redux-promise ensures that the promise'd request by axios is synchronously resolved
    // first before dispatching the action to the handlers
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

