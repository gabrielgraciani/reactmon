import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {itemFetch, itemDelete, itemShowEdit} from "../../../redux/actions/item";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import GifPikachu from 'assets/images/gifs/gif-pikachu.gif';
import Loading from 'components/loading';

function DataList(){
	const dispatch = useDispatch();
	const { list = [], isLoading, last, endInfiniteScroll } = useSelector(store => store.item);

	useEffect(() => {
		if(list.length === 0){
			dispatch(itemFetch());
		}
	}, [dispatch, list.length]);

	useEffect(() => {
		function handleScroll() {
			if (Math.round(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight ||
				Math.round(window.innerHeight + document.documentElement.scrollTop + 1) >= document.documentElement.offsetHeight){
				if(last){
					dispatch(itemFetch());
				}
			}
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isLoading, dispatch, last]);

	console.log('list', list);
	return(
		<>
		<tbody>
		{list.map((item, index) => (
			<tr className="row" key={item.id}>
				<td className="item">{item.id}</td>
				<td className="item">{item.nome}</td>
				<td className="item">
					{item.imagem.url && (
						<img src={item.imagem.url} alt="imagem" />
					)}
				</td>
				<td className="item">{item.descricao}</td>
				<td className="item actions">
					<div className="icon"><EditIcon className="edit" onClick={() => {dispatch(itemShowEdit(item))}} /></div>
					<div className="icon"><DeleteIcon className="delete" onClick={() => {if (window.confirm(`Você quer mesmo deletar o item ${item.nome} ?`)) dispatch(itemDelete(item.id))}} /></div>
				</td>
			</tr>
		))}
		{isLoading && (
			<tr className="row loading">
				<td className="loading">
					<div className="loading">
						<Loading />
					</div>
				</td>
			</tr>
		)}
		{endInfiniteScroll && (
			<tr className="row">
				<td className="loading fim">
					Não há mais registros abaixo... =(
					<img src={GifPikachu} alt="Pikachu chorando" />
				</td>
			</tr>
		)}
		</tbody>
		</>
	)
}

export default DataList;
