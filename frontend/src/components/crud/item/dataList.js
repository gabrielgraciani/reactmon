import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {itemFetch, itemDelete} from "redux/actions/item";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';


function DataList(){
	const dispatch = useDispatch();

	const { list, isLoading } = useSelector(store => store.item);
	console.log("list", list);

	useEffect(() => {
		if(list.length === 0){
			dispatch(itemFetch());
		}
	}, [dispatch, list.length]);

	return(
		<>
		<tbody>
		{isLoading && (
			<tr className="row">
				<td className="loading">
					<div className="loading">
						<CircularProgress size={50} />
					</div>
				</td>
			</tr>
		)}
		{list.map((item, index) => (
			<tr className="row" key={item.id}>
				<td className="item">{item.id}</td>
				<td className="item">{item.nome}</td>
				<td className="item">{item.descricao}</td>
				<td className="item actions">
					<div className="icon"><EditIcon className="edit" /></div>
					<div className="icon"><DeleteIcon className="delete" onClick={() => {if (window.confirm(`Você quer mesmo deletar o item ${item.nome} ?`)) dispatch(itemDelete(item.id))}} /></div>
				</td>
			</tr>
		))}
		</tbody>
		</>
	)
}

export default DataList;