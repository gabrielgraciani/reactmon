import { combineReducers } from 'redux';

import pokemon from './reducers/pokemon.js';

const reducers = combineReducers({
	pokemon
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
