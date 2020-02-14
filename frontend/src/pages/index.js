import React, {useEffect} from 'react'
import Carousel from 'components/carousel';
import {useDispatch, useSelector} from "react-redux";
import {pokemonFetch} from "../redux/actions/pokemon";
import Loading from 'components/loading';

function Home(){
	const dispatch = useDispatch();


	const { list, isLoading } = useSelector(store => store.pokemon);

	useEffect(() => {
		if (list.length === 0) {
			dispatch(pokemonFetch());
		}
	}, [dispatch, list.length]);

	return(
		<>
		<div id="wrap_banner">
			<Carousel />
		</div>

		<ul>

		</ul>

		<div id="wrap_pokemon">
			{isLoading && (
				<Loading/>
			)}
			<div className="indent">
				{list.map(item => (
					<div className={`card ${item.type[0].toLowerCase()}`} key={item.id}>
						<div className="imagem">
							<img src={item.img} className="pokemon" alt={item.name} />
						</div>
						<div className="conteudo">
							<div className="tipos">
								{item.type.map((tipo, index) => (
									<div className={`tipo ${tipo.toLowerCase()}`} key={index}>
										<span>{tipo}</span>
									</div>
								))}
							</div>
							<div className="nome">
								<h4>{item.name}</h4>
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
										<span>55</span>
									</div>
									<div className="item">
										<span>55</span>
									</div>
									<div className="item">
										<span>55</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>

{/*		<div id="wrap_pokemons">
			<div className="indent">
				{data.pokemon.map(item => (
					<div className="item" key={item.id}>
						<img src={`${Background}`} className="fundo" alt="pokebola" />
						<div className="imagem">
							<img src={item.img} className="pokemon" alt={item.name} />
						</div>
						<div className="nome">
							<h2>{item.name}</h2>
						</div>
						<div className="tipo">
							{item.type.map((tipo, index) => (
								<div className={`tip ${tipo.toLowerCase()}`} key={index}>
									<h4>{tipo}</h4>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>*/}
		</>
	)

}

export default Home
