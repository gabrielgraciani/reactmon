import React, {useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GifPikachu from 'assets/images/gifs/gif-pikachu.gif';
import Loading from 'components/loading';
import {pokemonDelete, pokemonFetch, pokemonShowEdit} from "../../../redux/actions/pokemon";
import {useDispatch, useSelector} from "react-redux";

function DataList({searchResult, searchTerm}){
	const dispatch = useDispatch();
	const { endInfiniteScroll, isLoading, last, list = [] } = useSelector(store => store.pokemon);

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

	return(
		<>
		{searchTerm && searchResult.map((pokemon) => (
			<div className="row" key={pokemon.id}>
				<div className="item">{pokemon.id}</div>
				<div className="item">{pokemon.nome}</div>
				<div className="item">teste{/*{pokemon.tipo.join(', ')}*/}</div>
				<div className="item">{pokemon.altura}</div>
				<div className="item">{pokemon.peso}</div>
				<div className="item">teste{/*{pokemon.fraquezas.join(', ')}*/}</div>
				<div className="item">evoluções</div>
				<div className="item">
					{pokemon.imagem.url && (
						<img src={pokemon.imagem.url} alt="imagem" />
					)}
				</div>
				<div className="item actions">
					<div className="icon"><EditIcon className="edit" onClick={() => {dispatch(pokemonShowEdit(pokemon))}} /></div>
					<div className="icon"><DeleteIcon className="delete" onClick={() => {if (window.confirm(`Você quer mesmo deletar o pokemon ${pokemon.nome} ?`)) dispatch(pokemonDelete(pokemon.id))}} /></div>
				</div>
			</div>
		))}

		{!searchTerm && list.map((pokemon, index) => (
			<div className="row" key={pokemon.id}>
				<div className="item">{pokemon.id}</div>
				<div className="item">{pokemon.nome}</div>
				<div className="item">teste{/*{pokemon.tipo.join(', ')}*/}</div>
				<div className="item">{pokemon.altura}</div>
				<div className="item">{pokemon.peso}</div>
				<div className="item">teste{/*{pokemon.fraquezas.join(', ')}*/}</div>
				<div className="item">evoluções</div>
				<div className="item">
					{pokemon.imagem.url && (
						<img src={pokemon.imagem.url} alt="imagem" />
					)}
				</div>
				<div className="item actions">
					<div className="icon"><EditIcon className="edit" onClick={() => {dispatch(pokemonShowEdit(pokemon))}} /></div>
					<div className="icon"><DeleteIcon className="delete" onClick={() => {if (window.confirm(`Você quer mesmo deletar o pokemon ${pokemon.nome} ?`)) dispatch(pokemonDelete(pokemon.id))}} /></div>
				</div>
			</div>
		))}
		{!searchTerm && isLoading && (
			<div className="row loading">
				<div className="loading">
					<div className="loading">
						<Loading />
					</div>
				</div>
			</div>
		)}
		{!searchTerm && endInfiniteScroll && (
			<div className="row">
				<div className="loading fim">
					Não há mais registros abaixo... =(
					<img src={GifPikachu} alt="Pikachu chorando" />
				</div>
			</div>
		)}
		</>
	)
}

export default DataList;
