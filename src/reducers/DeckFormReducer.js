import {
    DECK_CREATE,
    CARD_CREATE
} from '../actions/types';


const INITIAL_STATE = {
    deckName: '',
    cards: [],
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}