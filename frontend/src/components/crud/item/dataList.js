import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';

function dataList(){

	return(
		<>
		<tbody>
			<tr className="row">
				<td className="item">id</td>
				<td className="item">nome</td>
				<td className="item">descricao</td>

				<td className="item actions">
					<div className="icon"><EditIcon className="edit" /></div>
					<div className="icon"><DeleteIcon className="delete" /></div>
				</td>
			</tr>
		</tbody>

		</>
	)
}

export default dataList;