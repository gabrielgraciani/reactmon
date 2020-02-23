import React, {lazy, Suspense, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {CIDADES, CRUD_POKEMON, CRUD_ITEM, CRUD_CIDADE, ITENS, LOGIN, POKEDEX, POKEMON_SLUG} from './routes';
import {useDispatch, useSelector} from "react-redux";
import {authCheckUserLoggedIn} from './redux/actions/auth';
import { useCookies } from 'react-cookie';

import Header from 'components/header';
import Footer from 'components/footer';
import Loading from 'components/loading';



const Home =  import('pages/index');
const Cidades =  import('pages/cidades');
const Crud_Pokemon =  import('pages/crud/pokemon');
const Crud_Item =  import('pages/crud/item');
const Crud_Cidade = import('pages/crud/cidade');
const Itens =  import('pages/itens');
const Login =  import('pages/login');
const Pokedex =  import('pages/pokedex');
const Pokemon_Slug =  import('pages/pokemonSlug');


function App({location}) {
	// eslint-disable-next-line
	const [cookies, setCookie] = useCookies(['name']);

	const dispatch = useDispatch();
	const {usuario, checkUserLoggedIn} = useSelector(store => store.auth);

	useEffect(() => {
		dispatch(authCheckUserLoggedIn());
		if(usuario){
			setCookie('name', usuario.displayName || '', {path: '/'})
		}
	}, [usuario, dispatch, setCookie]);


	if(usuario){
		if(location.pathname === LOGIN){
			return <Redirect to={CRUD_POKEMON} />
		}
	}
	else {
		if (location.pathname === CRUD_POKEMON) {
			return <Redirect to={LOGIN}/>
		}
		if (location.pathname === CRUD_ITEM) {
			return <Redirect to={LOGIN}/>
		}
		if (location.pathname === CRUD_CIDADE) {
			return <Redirect to={LOGIN}/>
		}
	}


  return (
  	<>

	{checkUserLoggedIn && (
		<div id="wrap_loading">
			<Loading />
		</div>
	)}
	  <div id="wrapper_body">
		  <Header />

		  <div id="wrapper_components">
			  <Suspense fallback={''}>
				  <Switch>
					  <Route path={CIDADES} component={Cidades} />
					  <Route path={CRUD_POKEMON} component={Crud_Pokemon} />
					  <Route path={CRUD_ITEM} component={Crud_Item} />
					  <Route path={CRUD_CIDADE} component={Crud_Cidade} />
					  <Route path={ITENS} component={Itens} />
					  <Route path={LOGIN} component={Login} />
					  <Route path={POKEDEX} component={Pokedex} />
					  <Route path={POKEMON_SLUG} component={Pokemon_Slug} />
					  <Route component={Home} />
				  </Switch>
			  </Suspense>
		  </div>

		  <Footer />
	  </div>
	</>
  );
}

export default App;
