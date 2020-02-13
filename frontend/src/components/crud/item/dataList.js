import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {itemFetch, itemDelete, itemShowEdit} from "../../../redux/actions/item";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';


function DataList(){

	const dispatch = useDispatch();

	const { list = [], isLoading } = useSelector(store => store.item);
	console.log('list', list);

	useEffect(() => {
		dispatch(itemFetch());
	}, [dispatch]);

	useEffect(() => {
		function handleScroll() {
			if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
			dispatch(itemFetch());
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isLoading, dispatch]);

	return(
		<>
		<tbody>
		{list.map((item, index) => (
			<tr className="row" key={item.id}>
				<td className="item">{item.id}</td>
				<td className="item">{item.nome}</td>
				<td className="item">{item.descricao}</td>
				<td className="item actions">
					<div className="icon"><EditIcon className="edit" onClick={() => {dispatch(itemShowEdit(item))}} /></div>
					<div className="icon"><DeleteIcon className="delete" onClick={() => {if (window.confirm(`Você quer mesmo deletar o item ${item.nome} ?`)) dispatch(itemDelete(item.id))}} /></div>
				</td>
			</tr>
		))}
		{isLoading && (
			<tr className="row">
				<td className="loading">
					<div className="loading">
						<CircularProgress size={50} />
					</div>
				</td>
			</tr>
		)}
		</tbody>

		</>
	)
}

export default DataList;
