import {
    DECKS_FETCH_SUCCESS,
    DATE_CHANGE,
    DECK_DELETE_SUCCESS,
    ALARM_SAVE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
    decks: {},
    date: '',
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        
        case DATE_CHANGE:
            return {...state, date: action.payload}

        case DECKS_FETCH_SUCCESS:

            console.log(action.payload);
            return {...state, decks: action.payload};
        
        case DECK_DELETE_SUCCESS:
            return {...state, date: ''};

        case ALARM_SAVE_SUCCESS:
            return {...state, date: ''};


        default:
            return state;
    }
}