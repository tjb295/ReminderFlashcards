import {
    DECKS_FETCH_SUCCESS,
    DATE_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
    decks: {},
    date: {}
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        
        case DATE_CHANGE:
            return {...state, date: action.payload}

        case DECKS_FETCH_SUCCESS:
            return {...state, decks: action.payload};
        default:
            return state;
    }
}