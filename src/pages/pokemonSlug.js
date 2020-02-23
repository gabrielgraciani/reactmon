import React, {useEffect} from 'react';
import {pokemonSlugFetch} from "../redux/actions/pokemon";
import {useDispatch, useSelector} from "react-redux";
import GeneroMasc from 'assets/images/genero-masc.png';
import GeneroFem from 'assets/images/genero-fem.png';
import Loading from 'components/loading';
import {POKEDEX} from 'routes';
import {Link} from 'react-router-dom';

function PokemonSlug({match}){

	const dispatch = useDispatch();
	const { isLoading, listSlug } = useSelector(store => store.pokemon);

	const {id} = match.params;
	useEffect(() => {
		dispatch(pokemonSlugFetch(id));
	}, [dispatch, id]);

	console.log('listslug', listSlug);


	return(
		<div id="wrap_pokemon" className="solo">
			{isLoading && (
				<div className="loading">
					<Loading />
				</div>
			)}

			{!isLoading && (
				<div className="indent">
					<div id="vermais">
						<Link to={POKEDEX}>
							Voltar
						</Link>
					</div>
				</div>
			)}
			<div className="indent">
				{listSlug.map((item, index) => (
					<div key={index} className="card">
						<div className="col">
							<div className="imagem">
								<img src={item.imagem.url} alt={item.nome} />
							</div>
						</div>

						<div className="col">
							<div className="nome">
								<h4>{item.nome}</h4>
							</div>
							<div className="especificacoes">
								<div className="item">
									<span>Peso</span>
									<span className="dark">{item.peso}</span>
								</div>
								<div className="item">
									<span>Altura</span>
									<span className="dark">{item.altura}</span>
								</div>
								<div className="item">
									<span>Gênero</span>
									<div className="imagens">
										<img src={GeneroMasc} alt="Masculino"/>
										<img src={GeneroFem} alt="Feminino"/>
									</div>
								</div>
							</div>
							<div className="conteudo">
								<div className="nome">
									<h4>Tipos</h4>
								</div>
								<div className="tipos">
									{item.tipo.map((tipo, index) => (
										<div className={`tipo ${tipo.toLowerCase()}`} key={index}>
											<span>{tipo}</span>
										</div>
									))}
								</div>
							</div>
							<div className="conteudo">
								<div className="nome">
									<h4>Fraquezas</h4>
								</div>
								<div className="tipos">
									{item.fraquezas.map((fraqueza, index) => (
										<div className={`tipo ${fraqueza.toLowerCase()}`} key={index}>
											<span>{fraqueza}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

		</div>
	)
}

export default PokemonSlug