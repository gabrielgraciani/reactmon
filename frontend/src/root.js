import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "assets/css/styles.css";
import App from './App';
import PokemonProvider from 'contexts/pokemon';
import { Provider } from 'react-redux';

import configRedux from './redux/configRedux';
const store = configRedux();

const Root = () => (
	<Provider store={store}>
		<PokemonProvider>
			<BrowserRouter>
				<Route component={App}/>
			</BrowserRouter>
		</PokemonProvider>
	</Provider>
);

export default Root;
