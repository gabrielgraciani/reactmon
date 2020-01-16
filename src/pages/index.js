import React from 'react'
import Background from '../assets/images/bg-item.png';
import Pokemon from '../assets/images/venusaur.png';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => (
	<>
	<div id="wrap_banner">
		<Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoplay={true} interval={3000}>
			<div className="item">this is slide 1</div>
			<div className="item">this is slide 2</div>
			<div className="item">this is slide 3</div>
		</Carousel>
	</div>
  <div id="wrap_pokemons">
	  <div className="indent">
		  <div className="item">
			  <img src={`${Background}`} className="fundo" />
			  <div className="imagem">
			 	<img src={`${Pokemon}`} className="pokemon" />
			  </div>
			  <div className="nome">
				  <h2>Venusaur</h2>
			  </div>
			  <div className="tipo">
				  <div className="tip grass">
					  <h4>Grass</h4>
				  </div>
				  <div className="tip poison">
					  <h4>Poison</h4>
				  </div>
			  </div>
		  </div>

		  <div className="item">
			  <img src={`${Background}`} className="fundo" />
			  <div className="imagem">
				  <img src={`${Pokemon}`} className="pokemon" />
			  </div>
			  <div className="nome">
				  <h2>Venusaur</h2>
			  </div>
			  <div className="tipo">
				  <div className="tip fire">
					  <h4>Fire</h4>
				  </div>
				  <div className="tip water">
					  <h4>Water</h4>
				  </div>
			  </div>
		  </div>

		  <div className="item">
			  <img src={`${Background}`} className="fundo" />
			  <div className="imagem">
				  <img src={`${Pokemon}`} className="pokemon" />
			  </div>
			  <div className="nome">
				  <h2>Venusaur</h2>
			  </div>
			  <div className="tipo">
				  <div className="tip eletric">
					  <h4>Eletric</h4>
				  </div>
				  <div className="tip bug">
					  <h4>Bug</h4>
				  </div>
			  </div>
		  </div>

		  <div className="item">
			  <img src={`${Background}`} className="fundo" />
			  <div className="imagem">
				  <img src={`${Pokemon}`} className="pokemon" />
			  </div>
			  <div className="nome">
				  <h2>Venusaur</h2>
			  </div>
			  <div className="tipo">
				  <div className="tip flying">
					  <h4>Flying</h4>
				  </div>
				  <div className="tip normal">
					  <h4>Normal</h4>
				  </div>
			  </div>
		  </div>

		  <div className="item">
			  <img src={`${Background}`} className="fundo" />
			  <div className="imagem">
				  <img src={`${Pokemon}`} className="pokemon" />
			  </div>
			  <div className="nome">
				  <h2>Venusaur</h2>
			  </div>
			  <div className="tipo">
				  <div className="tip ground">
					  <h4>Ground</h4>
				  </div>
				  <div className="tip fairy">
					  <h4>Fairy</h4>
				  </div>
			  </div>
		  </div>
	  </div>
  </div>
	</>
);

export default Home
