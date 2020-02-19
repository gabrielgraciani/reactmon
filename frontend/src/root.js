import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "assets/css/styles.css";
import App from './App';
import PokemonProvider from 'contexts/pokemon';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import configRedux from './redux/configRedux';
const store = configRedux();

const Root = () => (
	<CookiesProvider>
	<Provider store={store}>
		<PokemonProvider>
			<BrowserRouter>
				<Route component={App}/>
			</BrowserRouter>
		</PokemonProvider>
	</Provider>
	</CookiesProvider>
);

export default Root;
