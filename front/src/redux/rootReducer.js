import { combineReducers } from 'redux';
import booksReducer from '../components/containers/Books/redux';
import shopReducer from '../components/CartHeader/redux';

const rootReducer = combineReducers({
    books: booksReducer,
    shop: shopReducer
});

export default rootReducer;