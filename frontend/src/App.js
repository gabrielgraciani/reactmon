import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {CIDADES, ITENS, LOGIN, POKEDEX} from './routes';

import Header from './components/header';
import Footer from './components/footer';

const Home = lazy(() => import('./pages/index'));
const Cidades = lazy(() => import('./pages/cidades'));
const Itens = lazy(() => import('./pages/itens'));
const Login = lazy(() => import('./pages/login'));
const Pokedex = lazy(() => import('./pages/pokedex'));


function App({location}) {
  return (
		  <div id="wrapper_body">
			  <Header />

			  <div id="wrapper_components">
				  <Suspense fallback={'Carregando...'}>
					  <Switch>
						  <Route path={CIDADES} component={Cidades} />
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
