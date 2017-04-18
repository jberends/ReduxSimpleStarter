// the weather list (state) is an array of cities with their weather data
import {FETCH_WEATHER} from "../actions/enums";


// will capture the actions an handle on it.
export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]);
            // WTF magic code ... (ellipsis)
            return [action.payload.data, ...state];
    }

    return state;
}