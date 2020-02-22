import { combineReducers } from 'redux';

import pokemon from './reducers/pokemon.js';
import item from './reducers/item.js';
import auth from './reducers/auth.js';
import cidade from './reducers/cidade.js';

const reducers = combineReducers({
	pokemon,
	item,
	auth,
	cidade
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
