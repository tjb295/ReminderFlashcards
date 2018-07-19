import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DeckFormReducer from './DeckFormReducer';


export default combineReducers({
    auth: AuthReducer,
    flashCard: DeckFormReducer
});