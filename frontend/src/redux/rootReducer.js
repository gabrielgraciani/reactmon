import { combineReducers } from 'redux';

import pokemon from './reducers/pokemon.js';
import item from './reducers/item.js';
import activeClass from './reducers/activeClass.js';

const reducers = combineReducers({
	pokemon,
	item,
	activeClass
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
