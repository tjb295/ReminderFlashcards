import {
    DECK_CREATE,
    CARD_CREATE,
    DECK_SAVE,
    DECK_NAME_CHANGE,
    DECK_CREATE_SUCCESS,
    CARD_UPDATE,
    CARDS_FETCH_SUCCESS,
    DECKS_FETCH_SUCCESS,
    CLEAR_FORM,
    ALARM_SAVE_SUCCESS,
    DATE_CHANGE,
    DECK_DELETE_SUCCESS,
    CARD_RESET,
    DATE_RESET,
    ALARM_FETCH
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

//keeps track of form for deckname
export const onDeckNameChange = (text) => {
    return {
        type: DECK_NAME_CHANGE,
        payload: text
    }
}

export const clearForm = () => {
    return {
        type: CLEAR_FORM
    }
}

//save the current deck with a nam
export const saveCurrentDeck = ({ deckName, deckId }) => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/decks/${deckId}`)
        .update({ DeckName: deckName, alarmStatus: false, date: '' })
        .then(() => {
            dispatch({ type: DECK_CREATE_SUCCESS});
            Actions.pop();
        })
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
                       payload: refId.key
                    });
        });
    };
}

//action to create new deck of cards
export const addCardtoDeck = ({ front, back, deckId }) => {
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
        firebase.database().ref(`/users/${currentUser.uid}/decks/${deckId}/cards`)
        .push({front, back})
        .then(() => {
            dispatch({
                type: CARD_CREATE
            });
        });
    };
}

//keeps track of card form updates
export const cardDetailUpdate = ({ prop, value }) => {
    return{
        type: CARD_UPDATE,
        payload: {prop, value}
    }
}

export const cardDetailReset = () => {
    return{
        type: CARD_RESET
    }
}

export const deckFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/decks`)
        .on('value', snapshot => {
            dispatch({ type: DECKS_FETCH_SUCCESS, payload: snapshot.val()});
        });
    };
}

export const cardsFetch = (deckId) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/decks/${deckId}/cards`)
        .on('value', snapshot => {
            dispatch({ type: CARDS_FETCH_SUCCESS, payload: snapshot.val()});
        });
    };
}

export const saveAlarm = (date, deckId) => {
    const { currentUser } = firebase.auth();
    console.log(date);
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/decks/${deckId}`)
        .update({ alarmDate: date})
            .then(() => {
                dispatch({ type: ALARM_SAVE_SUCCESS });
            });
    };
}

export const alarmFetch = (deckId) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/decks/${deckId}`)
        .on('value', snapshot => {
            dispatch({ type: ALARM_FETCH, payload: snapshot.val()});
        });
    };
}

export const onDateChange = (date) => {
    return {
        type: DATE_CHANGE,
        payload: date
    };
}

export const deleteDeck = ( deckId ) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/decks/${deckId}`)
        .remove()
            .then(() => {
                dispatch({type: DECK_DELETE_SUCCESS});
            });
    };
};

export const toggleAlarm = ( deckId, value ) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/decks/${deckId}`)
        .update({ alarmStatus: value })
            .then(() => {
                dispatch({ type: ALARM_TOGGLE});
            });
    };
}
