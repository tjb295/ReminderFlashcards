import {
    ALARM_FETCH
} from '../actions/types';

const INITIAL_STATE = {
    date: ''
}

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {

        case ALARM_FETCH:
            console.log(actions.payload.alarmDate);
            return {...state, date: actions.payload.alarmDate};
        default:
            return state;
    }
}