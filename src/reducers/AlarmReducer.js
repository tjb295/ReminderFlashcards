import {
    ALARM_FETCH,
    ALARM_TOGGLE
} from '../actions/types';

const INITIAL_STATE = {
    alarmStatus: false
}

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {

        case ALARM_FETCH:
            if (actions.payload.alarmStatus == null ){
                return {...state}
            }
            return {...state, alarmStatus: actions.payload.alarmStatus}

        case ALARM_TOGGLE:
            return {state};

        default:
            return state;
    }
}