import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DeckFormReducer from './DeckFormReducer';
import DeckFetchReducer from './DeckFetchReducer';
import AlarmReducer from './AlarmReducer';

export default combineReducers({
    auth: AuthReducer,
    flashCard: DeckFormReducer,
    deckFetch: DeckFetchReducer,
    alarm: AlarmReducer
});