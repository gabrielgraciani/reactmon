import React, {lazy, Suspense, useState, useEffect, useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {CIDADES, CRUD_POKEMON, CRUD_ITEM, ITENS, LOGIN, POKEDEX} from './routes';
import firebase from 'services/firebase';
import {AuthContext} from 'contexts/auth';
import {useDispatch, useSelector} from "react-redux";

import Header from 'components/header';
import Footer from 'components/footer';
import Loading from 'components/loading';



const Home = lazy(() => import('pages/index'));
const Cidades = lazy(() => import('pages/cidades'));
const Crud_Pokemon = lazy(() => import('pages/crud-pokemon'));
const Crud_Item = lazy(() => import('pages/crud-item'));
const Itens = lazy(() => import('pages/itens'));
const Login = lazy(() => import('pages/login'));
const Pokedex = lazy(() => import('pages/pokedex'));


function App({location}) {

	const dispatch = useDispatch();
	const {usuario} = useSelector(store => store.auth);

	const [userInfo2, setUserInfo2] = useState({
		isUserLoggedIn2: false,
		user: null
	});
	console.log('userinfo2', userInfo2);
	const [checkUserLogged2, setCheckUserLogged2] = useState(false);
	const {isUserLoggedIn2} = userInfo2;
	console.log('isuserloggedin2', isUserLoggedIn2);
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUserInfo2({
				isUserLoggedIn2: !!user,
				user
			});
			setCheckUserLogged2(true);
		});
	}, [usuario]);

	if(!checkUserLogged2){
		return(
			<div id="wrap_loading">
				<Loading />
			</div>
		)
	}

	if(isUserLoggedIn2){
		if(location.pathname === LOGIN){
			return <Redirect to={CRUD_POKEMON} />
		}
	}
	else{
		if(location.pathname === CRUD_POKEMON){
			return <Redirect to={LOGIN} />
		}
	}


	/*const {userInfo, setUserInfo} = useContext(AuthContext);
	console.log('userinfo', userInfo);
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
			<Loading />
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
	}*/

  return (
	  <div id="wrapper_body">
		  <Header />

		  <div id="wrapper_components">
			  <Suspense fallback={''}>
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
