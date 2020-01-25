import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "assets/css/styles.css";
import App from './App';
import {Provider} from 'react-redux';
import configureStore from 'redux/configure-store';
import AuthProvider from 'contexts/auth';

const store = configureStore();


const Root = () =>(
	<Provider store={store}>
		<AuthProvider>
			<BrowserRouter>
				<Route component={App} />
			</BrowserRouter>
		</AuthProvider>

	</Provider>

);

export default Root;
