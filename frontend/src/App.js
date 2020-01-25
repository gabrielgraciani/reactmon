import React, {lazy, Suspense, useState, useEffect, useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {CIDADES, CRUD, ITENS, LOGIN, POKEDEX} from './routes';
import firebase from 'services/firebase';
import {AuthContext} from 'contexts/auth';

import Header from 'components/header';
import Footer from 'components/footer';

const Home = lazy(() => import('pages/index'));
const Cidades = lazy(() => import('pages/cidades'));
const Crud = lazy(() => import('pages/crud'));
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
		return <h1 style={{color:"#000"}}>carregando...</h1>
	}

	if(isUserLoggedIn){
		if(location.pathname === LOGIN){
			return <Redirect to={CRUD} />
		}
	}
	else{
		if(location.pathname === CRUD){
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
					  <Route path={CRUD} component={Crud} />
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
