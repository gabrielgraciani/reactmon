import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from 'redux/reducers';
import thunk from 'redux-thunk';

export default ({initialState} = {}) => {
	const enhancer = compose(applyMiddleware(thunk), logger());
	const store = createStore(rootReducer, initialState, enhancer);
	return store;
}

const logger = () => window.__REDUX_DEVTOOLS_EXTENSION__
	? window.__REDUX_DEVTOOLS_EXTENSION__()
	: (x) => x