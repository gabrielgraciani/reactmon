import React, {useEffect, useState} from 'react';
import Banner from 'components/banner';
import {pokemonFetch, pokemonFetchSearch} from "../redux/actions/pokemon";
import {useDispatch, useSelector} from "react-redux";
import Loading from 'components/loading';
import GifPikachu from 'assets/images/gifs/gif-pikachu.gif';
import Search from 'components/search';
import {Link} from 'react-router-dom';

function Pokedex(){

	const [searchTerm, setSearchTerm] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [active, setActive] = useState('');

	const dispatch = useDispatch();
	const { listSearch, endInfiniteScroll, isLoading, last, list = [] } = useSelector(store => store.pokemon);

	const handleChange = (e) => {
		setSearchTerm(e.target.value.toLowerCase());
	};

	useEffect(() => {
		if(listSearch.length === 0){
			dispatch(pokemonFetchSearch());
		}
	}, [dispatch, listSearch.length]);

	useEffect(() => {
		if(list.length === 0){
			dispatch(pokemonFetch());
		}
	}, [dispatch, list.length]);

	useEffect(() => {
		if(!searchTerm){
			function handleScroll() {
				if (Math.round(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight ||
					Math.round(window.innerHeight + document.documentElement.scrollTop + 1) >= document.documentElement.offsetHeight){
					if(last){ dispatch(pokemonFetch()); }
				}
			}

			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, [searchTerm, isLoading, dispatch, last]);

	useEffect(() => {
		const results = listSearch.filter(pokemon =>
			pokemon.nome.toLowerCase().includes(searchTerm));
		setSearchResult(results);

		if(searchTerm){
			setActive('active');
		} else{
			setActive('');
		}

	}, [listSearch, searchTerm]);

	return(
		<>
		<Banner className="pokedex" titulo="Pokemons">
			<p>A franquia Pokémon gira em torno de 890 espécies fictícias de monstros colecionáveis, cada um com designs e habilidades únicas.
			Os projetos para a multiplicidade de espécies podem inspirar-se em qualquer coisa como animais, plantas, criaturas mitológicas e até
				objetos inanimados. Muitos Pokémon são capazes de evoluir para espécies mais poderosas, enquanto outros podem sofrer mudanças de
				forma e obter resultados semelhantes.</p>

			<p>A vasta gama de criaturas é comumente dividida em "gerações", com cada divisão englobando principalmente novos títulos no série
				de jogos eletrônicos principais e muitas vezes uma mudança da plataforma portátil. Devido ao grande número de Pokémon, a
				listagem de cada espécie é dividida é apenas da primeira geração.</p>
		</Banner>

		<Search active={active} value={searchTerm} handleChange={handleChange} placeholder="Pesquise um pokemon" />

		<div id="wrap_pokemon" className="pokedex">
			<div className="indent">
				{searchTerm && searchResult.map((item) => (
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

				{!searchTerm && list.map((item) => (
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

				{!searchTerm && endInfiniteScroll && (
					<div className={`card normal fim`}>
						<div className="imagem">
							<img src={GifPikachu} className="pokemon" alt="Pikachu chorando" />
						</div>
						<div className="conteudo">
							<div className="nome">
								<h4>Não há mais registros abaixo... =(</h4>
							</div>
						</div>
					</div>
				)}
			</div>
			{isLoading && (
				<div className="loading">
					<Loading />
				</div>
			)}
		</div>
		</>
	)
}


export default Pokedex;