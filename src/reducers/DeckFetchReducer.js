import {
    DECKS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    decks: {}
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){

        case DECKS_FETCH_SUCCESS:
            return {...state, decks: action.payload};
        default:
            return state;
    }
}