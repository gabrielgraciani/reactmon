import React, {useState, useEffect} from 'react';
import DataList from './dataList';
import {itemOpenForm} from "../../../redux/actions/item";
import {itemFetchSearch} from "../../../redux/actions/item";

import {useDispatch, useSelector} from "react-redux";
import SearchIcon from '@material-ui/icons/Search';

function Tabela() {
	const dispatch = useDispatch();
	const { listSearch} = useSelector(store => store.item);
	console.log('listsearch', listSearch);

	useEffect(() => {
		if(listSearch.length === 0){
			dispatch(itemFetchSearch());
		}
	}, [dispatch, listSearch.length]);



	const [searchTerm, setSearchTerm] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	const handleChange = (e) => {
		setSearchTerm(e.target.value.toLowerCase());
		console.log(e.target.value);
	};

	useEffect(() => {
		const results = listSearch.filter(item =>
			item.nome.toLowerCase().includes(searchTerm));
		setSearchResult(results);
		console.log('results', results);

	}, [listSearch, searchTerm]);

	return(
		<div id="wrap_tabela">

			<div id="wrap_search" className="crud">
				<div className="search">
					<input className="search-input" type="text" name=""  value={searchTerm} onChange={handleChange} placeholder="Pesquise um item" />
					<div className="search-btn">
						<SearchIcon />
					</div>
				</div>
			</div>

			<div className="head">
				<div className="titulo">
					<h3>Itens</h3>
				</div>

				<div className="botoes">
					<button onClick={() => dispatch(itemOpenForm())}>Criar Item</button>
				</div>
			</div>

			<div className="conteudo">
				<div className="row head">
					<div className="item">ID</div>
					<div className="item">Nome</div>
					<div className="item">Imagem</div>
					<div className="item">Descrição</div>
					<div className="item">Função</div>
					<div className="item">Ações</div>
				</div>

				{searchResult.map((item, index) => (
					<div key={index}>{item.nome}</div>
				))}

				<DataList />
			</div>
		</div>
	)
}

export default Tabela;