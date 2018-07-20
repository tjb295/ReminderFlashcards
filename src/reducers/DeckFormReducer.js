import {
    DECK_CREATE,
    CARD_CREATE,
    DECK_SAVE,
    DECK_NAME_CHANGE,
    DECK_CREATE_SUCCESS,
    CARD_UPDATE,
    CARDS_FETCH_SUCCESS,
} from '../actions/types';


const INITIAL_STATE = {
    deckName: '',
    deckId: '',
    cards: {},
    front :'',
    back: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){

        case DECK_NAME_CHANGE:
            return {...state, deckName: action.payload};

        case DECK_CREATE:
            console.log(action.payload);
            return {...state, deckId: action.payload};

        case DECK_CREATE_SUCCESS:
            return INITIAL_STATE;
        
        case CARD_CREATE:
            return {...state, front: '', back: ''};

        case CARD_UPDATE:
            //update the front and back value with whats typed
            return { ...state, [action.payload.prop]: action.payload.value };

        case CARDS_FETCH_SUCCESS:
            return {...state, cards: action.payload};

        default:
            return state;
    }
}