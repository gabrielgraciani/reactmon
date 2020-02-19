import React, {useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GifPikachu from 'assets/images/gifs/gif-pikachu.gif';
import Loading from 'components/loading';
import {itemDelete, itemFetch, itemShowEdit} from "../../../redux/actions/item";
import {useDispatch, useSelector} from "react-redux";

function DataList({searchResult, searchTerm}){
	const dispatch = useDispatch();
	const { endInfiniteScroll, isLoading, last, list = [] } = useSelector(store => store.item);

	useEffect(() => {
		if(list.length === 0){
			dispatch(itemFetch());
		}
	}, [dispatch, list.length]);

	useEffect(() => {
		if(!searchTerm){
			function handleScroll() {
				if (Math.round(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight ||
					Math.round(window.innerHeight + document.documentElement.scrollTop + 1) >= document.documentElement.offsetHeight){
					if(last){ dispatch(itemFetch()); }
				}
			}

			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}

	}, [searchTerm, isLoading, dispatch, last]);

	return(
		<>
		{searchTerm && searchResult.map((item) => (
			<div className="row" key={item.id}>
				<div className="item">{item.id}</div>
				<div className="item">{item.nome}</div>
				<div className="item">{item.descricao}</div>
				<div className="item">{item.funcao}</div>
				<div className="item">
					{item.imagem.url && (
						<img src={item.imagem.url} alt="imagem" />
					)}
				</div>
				<div className="item actions">
					<div className="icon"><EditIcon className="edit" onClick={() => {dispatch(itemShowEdit(item))}} /></div>
					<div className="icon"><DeleteIcon className="delete" onClick={() => {if (window.confirm(`Você quer mesmo deletar o item ${item.nome} ?`)) dispatch(itemDelete(item.id))}} /></div>
				</div>
			</div>
		))}

		{!searchTerm && list.map((item, index) => (
			<div className="row" key={item.id}>
				<div className="item">{item.id}</div>
				<div className="item">{item.nome}</div>
				<div className="item">{item.descricao}</div>
				<div className="item">{item.funcao}</div>
				<div className="item">
					{item.imagem.url && (
						<img src={item.imagem.url} alt="imagem" />
					)}
				</div>
				<div className="item actions">
					<div className="icon"><EditIcon className="edit" onClick={() => {dispatch(itemShowEdit(item))}} /></div>
					<div className="icon"><DeleteIcon className="delete" onClick={() => {if (window.confirm(`Você quer mesmo deletar o item ${item.nome} ?`)) dispatch(itemDelete(item.id))}} /></div>
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
