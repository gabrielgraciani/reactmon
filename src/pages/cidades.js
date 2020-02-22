import React, {useEffect, useState} from 'react';
import Banner from 'components/banner';
import {cidadeFetch, cidadeFetchSearch} from "../redux/actions/cidade";
import {useDispatch, useSelector} from "react-redux";
import Loading from 'components/loading';
import GifSquirtle from 'assets/images/gifs/gif-squirtle.gif';
import Search from 'components/search';

function Cidades(){

	const [searchTerm, setSearchTerm] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [active, setActive] = useState('');

	const dispatch = useDispatch();
	const { listSearch, endInfiniteScroll, isLoading, last, list = [] } = useSelector(store => store.cidade);

	const handleChange = (e) => {
		setSearchTerm(e.target.value.toLowerCase());
	};

	useEffect(() => {
		if(listSearch.length === 0){
			dispatch(cidadeFetchSearch());
		}
	}, [dispatch, listSearch.length]);

	useEffect(() => {
		if(list.length === 0){
			dispatch(cidadeFetch());
		}
	}, [dispatch, list.length]);

	useEffect(() => {
		if(!searchTerm){
			function handleScroll() {
				if (Math.round(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight ||
					Math.round(window.innerHeight + document.documentElement.scrollTop + 1) >= document.documentElement.offsetHeight){
					if(last){ dispatch(cidadeFetch()); }
				}
			}

			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, [searchTerm, isLoading, dispatch, last]);

	useEffect(() => {
		const results = listSearch.filter(cidade =>
			cidade.nome.toLowerCase().includes(searchTerm));
		setSearchResult(results);

		if(searchTerm){
			setActive('active');
		} else{
			setActive('');
		}

	}, [listSearch, searchTerm]);

	return(
		<>
		<Banner className="cidades" titulo="Cidades">
			<p>Muitas regiões foram descritas na franquia de jogos eletrônicos, desenhos animados e
				quadrinhos Pokémon. Cada uma das gerações de RPGs Originais de Pokémon introduziu uma nova Região.
				Há ainda, algumas Regiões introduzidas em games Spin-offs, como Pokémon Ranger,
				Pokémon Mystery Dungeon e principalmente Pokémon Colosseum e Pokémon XD. Nos jogos,
				não é possível acessar outras Regiões de outros games, exceto Kanto, acessível em Pokémon Gold,
				Silver & Crystal após a vitória sobre a Elite dos Quatro.</p>

			<p>Todas as Regiões onde se passa um RPG Original são baseadas em regiões reais do Japão
				e a região de Orre também é baseada em uma área do Japão. As regiões também podem ser
				consideradas como países, pois, embora não haja significativa diferença cultural entre
				os moradores da diferentes regiões, nas versões em inglês dos jogos Pokémon Gold
				e Pokémon Silver, o mapa refere-se a Kanto e Johto como countrys.</p>
		</Banner>

		<Search active={active} value={searchTerm} handleChange={handleChange} placeholder="Pesquise uma cidade" />

		<div id="wrap_cidades">
			<div className="indent">
				{searchTerm && searchResult.map((cidade) => (
					<div className="cidade">
						<div className="imagem">
							<img src={cidade.imagem.url} alt="cidade"/>

							<svg class="wavy" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
								<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none'}}></path>
							</svg>
						</div>
						<div className="conteudo">
							<div className="nome">
								<h4>{cidade.nome}</h4>
							</div>
							<div className="descricao">
								<span>{cidade.descricao}</span>
							</div>
						</div>
					</div>
				))}

				{!searchTerm && list.map((cidade) => (
					<div className="cidade">
						<a href={cidade.imagem.url} target="_blank" rel="noopener noreferrer" className="imagem">
							<img src={cidade.imagem.url} alt="cidade"/>

							<svg class="wavy" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
								<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none'}}></path>
							</svg>
						</a>
						<div className="conteudo">
							<div className="nome">
								<h4>{cidade.nome}</h4>
							</div>
							<div className="descricao">
								<span>{cidade.descricao}</span>
							</div>
						</div>
					</div>
				))}

				{!searchTerm && endInfiniteScroll && (
					<div className="cidade fim">
						<div className="imagem">
							<img src={GifSquirtle} alt="Squirtle chorando" />
							<svg class="wavy" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
								<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none'}}></path>
							</svg>
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


export default Cidades;