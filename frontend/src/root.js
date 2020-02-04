import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "assets/css/styles.css";
import App from './App';
import AuthProvider from 'contexts/auth';
import PokemonProvider from 'contexts/pokemon';
import { Provider } from 'react-redux';

import configRedux from './redux/configRedux';
const store = configRedux();

const Root = () => (
	<Provider store={store}>
		<AuthProvider>
			<PokemonProvider>
				<BrowserRouter>
					<Route component={App}/>
				</BrowserRouter>
			</PokemonProvider>
		</AuthProvider>
	</Provider>
);

export default Root;
