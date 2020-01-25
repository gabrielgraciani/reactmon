import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from 'redux/reducers';
import thunk from 'redux-thunk';

export default ({initialState} = {}) => {
	const enhancer = compose(applyMiddleware(thunk), middleware());
	const store = createStore(rootReducer, initialState, enhancer);
	return store;
}

const middleware = () => (x) => x;