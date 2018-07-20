import {
    DECK_CREATE,
    CARD_CREATE,
    DECK_SAVE,
    DECK_NAME_CHANGE,
    DECK_CREATE_SUCCESS
} from '../actions/types';


const INITIAL_STATE = {
    deckName: '',
    deckId: '',
    cards: [],
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){

        case DECK_NAME_CHANGE:
            return {...state, deckName: action.payload};

        case DECK_CREATE:
            return {...state, deckId: action.payload};

        case DECK_CREATE_SUCCESS:
            return state;

        default:
            return state;
    }
}