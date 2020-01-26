import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "assets/css/styles.css";
import App from './App';
import AuthProvider from 'contexts/auth';
import PokemonProvider from 'contexts/pokemon';

const Root = () =>(
		<AuthProvider>
			<PokemonProvider>
				<BrowserRouter>
					<Route component={App} />
				</BrowserRouter>
			</PokemonProvider>
		</AuthProvider>

);

export default Root;
