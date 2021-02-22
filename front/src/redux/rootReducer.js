import { combineReducers } from 'redux';
import shopReducer from './redux';

const rootReducer = combineReducers({
    shop: shopReducer
});

export default rootReducer;