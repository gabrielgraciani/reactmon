import { combineReducers } from 'redux';

import pokemon from './reducers/pokemon.js';
import item from './reducers/item.js';

const reducers = combineReducers({
	pokemon,
	item
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
