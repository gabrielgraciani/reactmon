import { combineReducers } from 'redux';

import pokemon from './reducers/pokemon.js';
import item from './reducers/item.js';
import auth from './reducers/auth.js';

const reducers = combineReducers({
	pokemon,
	item,
	auth
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
