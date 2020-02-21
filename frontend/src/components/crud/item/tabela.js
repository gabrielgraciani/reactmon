import React, {useState, useEffect} from 'react';
import DataList from './dataList';
import {itemOpenForm} from "../../../redux/actions/item";
import {itemFetchSearch} from "../../../redux/actions/item";
import {useDispatch, useSelector} from "react-redux";
import Search from 'components/search';

function Tabela() {
	const dispatch = useDispatch();
	const { listSearch} = useSelector(store => store.item);
	useEffect(() => {
		if(listSearch.length === 0){
			dispatch(itemFetchSearch());
		}
	}, [dispatch, listSearch.length]);



	const [searchTerm, setSearchTerm] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [active, setActive] = useState('');

	const handleChange = (e) => {
		setSearchTerm(e.target.value.toLowerCase());
	};

	useEffect(() => {
		const results = listSearch.filter(item =>
			item.nome.toLowerCase().includes(searchTerm));
		setSearchResult(results);

		if(searchTerm){
			setActive('active');
		} else{
			setActive('');
		}

	}, [listSearch, searchTerm]);

	return(
		<div id="wrap_tabela">

			<Search className="crud" active={active} value={searchTerm} handleChange={handleChange} placeholder="Pesquise um item" />

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



				<DataList searchResult={searchResult} searchTerm={searchTerm} />
			</div>
		</div>
	)
}

export default Tabela;