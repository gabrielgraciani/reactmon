import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Background from '../assets/images/bg-item.png';

function Home(){
	const [data, setData] = useState({ pokemon: [] });


	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				'http://localhost:8080/api/v1/pokemon/');
			setData(result.data);
		};
		fetchData();
	}, []);
	return(
		<>
		<div id="wrap_banner">
			<div style={{width:'100%', height:'500px', background: 'red'}}>
				carousel
			</div>
		</div>

		<ul>

		</ul>

		<div id="wrap_pokemons">
			<div className="indent">
				{data.pokemon.map(item => (
					<div className="item" key={item.id}>
						<img src={`${Background}`} className="fundo" alt="pokebola" />
						<div className="imagem">
							<img src={item.img} className="pokemon" alt={item.name} />
						</div>
						<div className="nome">
							<h2>{item.name}</h2>
						</div>
						<div className="tipo">
							{item.type.map((tipo, index) => (
								<div className={`tip ${tipo.toLowerCase()}`} key={index}>
									<h4>{tipo}</h4>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
		</>
	)

}

export default Home
