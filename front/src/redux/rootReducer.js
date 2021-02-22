import { combineReducers } from 'redux';
import booksReducer from '../components/containers/Books/redux';

const rootReducer = combineReducers({
    books: booksReducer
});

export default rootReducer;