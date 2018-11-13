import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // console.log('Action received', action);

    switch (action.type) {
        case FETCH_WEATHER:             
            
            return [ action.payload.data, ...state ];
            // put new record ONLY at the front, and then existing data
            // alternative way: return state.concat([ action.payload.data ]);
            
            // VERY IMPORTANT in redux!!!
            // BIG TRAP: can't use state.push - it's directly mutating state.
            // instead, use the method concat, which returns a new instance of array
            // that includes both current state and new data.

            
    }
    return state;
}
// redux-promise takes care of stopping the action and resolving the promise for us.
// so we're able to focus on working with data instead of promises in reducers.