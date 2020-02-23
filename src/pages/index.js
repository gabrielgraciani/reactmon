import React, {useEffect} from 'react'
import {pokemonFetch} from "../redux/actions/pokemon";
import {useDispatch, useSelector} from "react-redux";
import Loading from 'components/loading';
import Banner from 'components/banner';
import {Link} from 'react-router-dom';
import {POKEDEX} from 'routes';

function Home(){

	const dispatch = useDispatch();
	const { isLoading, list = [] } = useSelector(store => store.pokemon);

	useEffect(() => {
		if(list.length === 0){
			dispatch(pokemonFetch());
		}
	}, [dispatch, list.length]);


	return(
		<>
		<Banner className="home" titulo="Sobre">
			<p>É uma franquia de mídia que pertence a The Pokémon Company, tendo sido criada por Satoshi Tajiri em 1995. Ela é centrada
				em criaturas ficcionais chamadas "Pokémon", que os seres humanos capturam e os treinam para lutarem um contra o
				outro como um esporte.</p>

			<p>A franquia começou com um par de jogos lançados para o Game Boy original, desenvolvidos pela Game Freak
				e publicados pela Nintendo. Atualmente, a franquia se estende em jogos, cartas colecionáveis, série de televisão,
				além de filmes, mangás e brinquedos. Pokémon é a segunda franquia de mídia de jogos mais bem sucedida e lucrativa do mundo,
				atrás da franquia de Mario que também pertence a Nintendo.</p>
		</Banner>

		<div id="wrap_pokemon">
			{isLoading && (
				<div className="loading">
					<Loading />
				</div>
			)}
			{!isLoading && (
				<div className="indent">
					<div id="vermais">
						<Link to={POKEDEX}>
							Ver mais
						</Link>
					</div>
				</div>
			)}
			<div className="indent">
				{list.map((item) => (
					<Link className={`card ${item.tipo[0].toLowerCase()}`} key={item.id} to={`/pokemon/${item.id}`}>
						<div className="imagem">
							<img src={item.imagem.url} className="pokemon" alt={item.nome} />
						</div>
						<div className="conteudo">
							<div className="tipos">
								{item.tipo.map((tipo, index) => (
									<div className={`tipo ${tipo.toLowerCase()}`} key={index}>
										<span>{tipo}</span>
									</div>
								))}
							</div>
							<div className="nome">
								<h4>{item.nome}</h4>
							</div>
							<div className="especificacoes">
								<div className="col">
									<div className="item">
										<span>Peso:</span>
									</div>
									<div className="item">
										<span>Altura:</span>
									</div>
									<div className="item">
										<span>Fraquezas:</span>
									</div>
								</div>
								<div className="col col2">
									<div className="item">
										<span>{item.peso}</span>
									</div>
									<div className="item">
										<span>{item.altura}</span>
									</div>
									<div className="item">
										<span>{item.fraquezas.join(', ')}</span>
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>

		</>
	)

}

export default Home
