import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Background from '../assets/images/bg-item.png';
import Pokemon from '../assets/images/venusaur.png';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

function Home(){
	const [data, setData] = useState({ pokemon: [] });
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				'http://localhost:3000/api/v1/pokemon',
			);
			console.log(result);
			setData(result.data);
		};
		fetchData();
	}, []);
	return(
		<>
		<div id="wrap_banner">
			<Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoplay={true} interval={3000}>
				<div className="item">this is slide 1</div>
				<div className="item">this is slide 2</div>
				<div className="item">this is slide 3</div>
			</Carousel>
		</div>

		<ul>

		</ul>

		<div id="wrap_pokemons">
			<div className="indent">
				{data.pokemon.map(item => (
					<div className="item" key={item.id}>
						<img src={`${Background}`} className="fundo" />
						<div className="imagem">
							<img src={item.img} className="pokemon" />
						</div>
						<div className="nome">
							<h2>{item.name}</h2>
						</div>
						<div className="tipo">
							{item.type.map(teste => (
								<div className={`tip ${teste.toLowerCase()}`}>
									<h4>{teste}</h4>
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
