import {
    DECK_CREATE,
    CARD_CREATE,
    DECK_SAVE,
    DECK_NAME_CHANGE
} from './types';
import firebase from 'firebase';

export const onDeckNameChange = (text) => {
    return {
        type: DECK_NAME_CHANGE,
        payload: text
    }
}

//once a user chooses add for now we will automaticaly make a new deck
export const newDeckCreated = ( DeckName ) => {

    const { currentUser } = firebase.auth();
    console.log("hello");
    return (dispatch) => {
        const refId = firebase.database().ref(`/users/${currentUser.uid}/decks`)
        .push({ DeckName })
        .then((refId) => {
            dispatch({ type: DECK_CREATE,
                       payload: refId
                    });
        });
    };
}

//action to create new deck of cards
export const addCardtoDeck = ({ front, back, uid }) => {
    //firebase call to save the data we are given
    //this says get access to our firebase db,
    //make reference to our users userid's emplyees
    //this is a JSON path, we want the userId to be the userId
    //of the currently authenticated user
    //we want to use this id as an intermediate key
    //if this ds here sounds confusing, as soon as we see this in fb
    //it'll make more sense

    //lets get the currently authenticated user
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/decks/${uid}`)
        .push({front, back})
        .then(() => {
            dispatch({
                type: CARD_CREATE,
            });
        });
    };
}