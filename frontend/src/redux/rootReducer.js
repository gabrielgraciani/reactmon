import { combineReducers } from 'redux';

import pokemon from './reducers/pokemon.js';
import item from './reducers/item.js';
import login from './reducers/login.js';

const reducers = combineReducers({
	pokemon,
	item,
	login
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
