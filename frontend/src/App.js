import React, {lazy, Suspense, useState, useEffect, useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {CIDADES, CRUD_POKEMON, CRUD_ITEM, ITENS, LOGIN, POKEDEX} from './routes';
import firebase from 'services/firebase';
import {AuthContext} from 'contexts/auth';

import Header from 'components/header';
import Footer from 'components/footer';
import CircularProgress from '@material-ui/core/CircularProgress';


const Home = lazy(() => import('pages/index'));
const Cidades = lazy(() => import('pages/cidades'));
const Crud_Pokemon = lazy(() => import('pages/crud-pokemon'));
const Crud_Item = lazy(() => import('pages/crud-item'));
const Itens = lazy(() => import('pages/itens'));
const Login = lazy(() => import('pages/login'));
const Pokedex = lazy(() => import('pages/pokedex'));


function App({location}) {
	const {userInfo, setUserInfo} = useContext(AuthContext);
	const [checkUserLogged, setCheckUserLogged] = useState(false);

	const {isUserLoggedIn} = userInfo;

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUserInfo({
				isUserLoggedIn: !!user,
				user,
			});
			setCheckUserLogged(true);
		});
	}, [setUserInfo]);

	if(!checkUserLogged){
		return(
		<div id="wrap_loading">
			<CircularProgress size={250} />
		</div>
		)
	}

	if(isUserLoggedIn){
		if(location.pathname === LOGIN){
			return <Redirect to={CRUD_POKEMON} />
		}
	}
	else{
		if(location.pathname === CRUD_POKEMON){
			return <Redirect to={LOGIN} />
		}
	}

  return (
	  <div id="wrapper_body">
		  <Header />

		  <div id="wrapper_components">
			  <Suspense fallback={'Carregando...'}>
				  <Switch>
					  <Route path={CIDADES} component={Cidades} />
					  <Route path={CRUD_POKEMON} component={Crud_Pokemon} />
					  <Route path={CRUD_ITEM} component={Crud_Item} />
					  <Route path={ITENS} component={Itens} />
					  <Route path={LOGIN} component={Login} />
					  <Route path={POKEDEX} component={Pokedex} />
					  <Route component={Home} />
				  </Switch>
			  </Suspense>
		  </div>

		  <Footer />
	  </div>
  );
}

export default App;
