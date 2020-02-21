import React, {useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GifPikachu from 'assets/images/gifs/gif-pikachu.gif';
import Loading from 'components/loading';
import {cidadeDelete, cidadeFetch, cidadeShowEdit} from "../../../redux/actions/cidade";
import {useDispatch, useSelector} from "react-redux";

function DataList({searchResult, searchTerm}){
	const dispatch = useDispatch();
	const { endInfiniteScroll, isLoading, last, list = [] } = useSelector(store => store.cidade);

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

	return(
		<>
		{searchTerm && searchResult.map((cidade) => (
			<div className="row" key={cidade.id}>
				<div className="item">{cidade.id}</div>
				<div className="item">{cidade.nome}</div>
				<div className="item">{cidade.descricao}</div>
				<div className="item">{cidade.funcao}</div>
				<div className="item">
					{cidade.imagem.url && (
						<img src={cidade.imagem.url} alt="imagem" />
					)}
				</div>
				<div className="item actions">
					<div className="icon"><EditIcon className="edit" onClick={() => {dispatch(cidadeShowEdit(cidade))}} /></div>
					<div className="icon"><DeleteIcon className="delete" onClick={() => {if (window.confirm(`Você quer mesmo deletar o cidade ${cidade.nome} ?`)) dispatch(cidadeDelete(cidade.id))}} /></div>
				</div>
			</div>
		))}

		{!searchTerm && list.map((cidade, index) => (
			<div className="row" key={cidade.id}>
				<div className="item">{cidade.id}</div>
				<div className="item">{cidade.nome}</div>
				<div className="item">{cidade.descricao}</div>
				<div className="item">
					{cidade.imagem.url && (
						<img src={cidade.imagem.url} alt="imagem" />
					)}
				</div>
				<div className="item actions">
					<div className="icon"><EditIcon className="edit" onClick={() => {dispatch(cidadeShowEdit(cidade))}} /></div>
					<div className="icon"><DeleteIcon className="delete" onClick={() => {if (window.confirm(`Você quer mesmo deletar o cidade ${cidade.nome} ?`)) dispatch(cidadeDelete(cidade.id))}} /></div>
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
