import React, {useEffect} from 'react';
import Banner from 'components/banner';
import Search from 'components/search';
import {itemFetch} from "../redux/actions/item";
import {useDispatch, useSelector} from "react-redux";
import Loading from 'components/loading';
import GifMudkip from 'assets/images/gifs/gif-cubone.gif';

function Itens(){

	const dispatch = useDispatch();
	const { endInfiniteScroll, isLoading, last, list = [] } = useSelector(store => store.item);

	useEffect(() => {
		if(list.length === 0){
			dispatch(itemFetch());
		}
	}, [dispatch, list.length]);

	useEffect(() => {
		function handleScroll() {
			if (Math.round(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight ||
				Math.round(window.innerHeight + document.documentElement.scrollTop + 1) >= document.documentElement.offsetHeight){
				if(last){ dispatch(itemFetch()); }
			}
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isLoading, dispatch, last]);


	return(
		<>
		<Banner className="itens" titulo="Itens">
			<p>No universo de Pokémon existem diversos itens a nossa disposição e cada um possui a sua
				funcionalidade e importância.</p>
			<p>Os <b>Held Itens</b> são itens que podem ser segurados por seus Pokémon e alguns são considerados
				os mais importantes para quem joga na modalidade competitiva, proporcionando diversas vantagens
				ao Pokémon portador, seja aumento dos atributos ofensivos e defensivos, diminuição de dados causados
				pelo oponente, recuperação de HP (health points), dentre outros. </p>
			<p>Além disso, as Berries também são muito utilizadas no competitivo e ao contrário dos itens que
				só possuem efeito em batalha  elas podem ser utilizadas fora dela também.</p>
		</Banner>

		<Search placeholder="Pesquise um item" />

		<div id="wrap_itens">
			<div className="indent">
				{list.map((item) => (
					<div className="item" key={item.id}>
						<div className="imagem">
							<img src={item.imagem.url} alt="pocao" />
						</div>
						<div className="conteudo">
							<div className="nome">
								<h4>{item.nome}</h4>
							</div>
							<div className="descricao">
								<span>{item.descricao}</span>
							</div>
						</div>
						<div className="footer">
							<h4>{item.funcao}</h4>
						</div>
					</div>
				))}

				{endInfiniteScroll && (
					<div className="item fim">
						<div className="imagem">
							<img src={GifMudkip} alt="Mudkip chorando" />
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


export default Itens;