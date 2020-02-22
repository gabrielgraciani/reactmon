import React, {useEffect} from 'react'
import Carousel from 'components/carousel';
import {pokemonFetch} from "../redux/actions/pokemon";
import {useDispatch, useSelector} from "react-redux";
import Loading from 'components/loading';

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
		<div id="wrap_banner">
			<Carousel />
		</div>

		<div id="wrap_pokemon">
			{isLoading && (
				<div className="loading">
					<Loading />
				</div>
			)}
			<div className="indent">
				{list.map((item) => (
					<div className={`card ${item.tipo[0].toLowerCase()}`} key={item.id}>
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
					</div>
				))}
			</div>
		</div>

		</>
	)

}

export default Home
