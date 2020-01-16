import React from 'react'
import Background from '../assets/images/bg-item.png';
import Pokemon from '../assets/images/venusaur.png';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => (
  <div id="wrap_pokemons">

	  <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoplay={true} interval={3000}>
		  <div style={{ height: "200px", color: "#fff" }}>this is slide 1</div>
		  <div style={{ height: "200px", color: "#fff" }}>this is slide 2</div>
		  <div style={{ height: "200px", color: "#fff" }}>this is slide 3</div>
	  </Carousel>

	  <div className="indent">
		  <div className="item">
			  <img src={`${Background}`} className="fundo" />
			  <img src={`${Pokemon}`} className="pokemon" />
			  <div className="nome">
				  <h2>Venusaur</h2>
			  </div>
			  <div className="tipo">
				  <div className="tip">
					  <h4>Grass</h4>
				  </div>
				  <div className="tip">
					  <h4>Poison</h4>
				  </div>
			  </div>
		  </div>
		  <div className="item">
			  <img src={`${Background}`} className="fundo" />
			  <img src={`${Pokemon}`} className="pokemon" />
			  <div className="nome">
				  <h2>Venusaur</h2>
			  </div>
			  <div className="tipo">
				  <div className="tip">
					  <h4>Grass</h4>
				  </div>
				  <div className="tip">
					  <h4>Poison</h4>
				  </div>
			  </div>
		  </div>
		  <div className="item">
			  <img src={`${Background}`} className="fundo" />
			  <img src={`${Pokemon}`} className="pokemon" />
			  <div className="nome">
				  <h2>Venusaur</h2>
			  </div>
			  <div className="tipo">
				  <div className="tip">
					  <h4>Grass</h4>
				  </div>
				  <div className="tip">
					  <h4>Poison</h4>
				  </div>
			  </div>
		  </div>
		  <div className="item">
			  <img src={`${Background}`} className="fundo" />
			  <img src={`${Pokemon}`} className="pokemon" />
			  <div className="nome">
				  <h2>Venusaur</h2>
			  </div>
			  <div className="tipo">
				  <div className="tip">
					  <h4>Grass</h4>
				  </div>
				  <div className="tip">
					  <h4>Poison</h4>
				  </div>
			  </div>
		  </div>
		  <div className="item">
			  <img src={`${Background}`} className="fundo" />
			  <img src={`${Pokemon}`} className="pokemon" />
			  <div className="nome">
				  <h2>Venusaur</h2>
			  </div>
			  <div className="tipo">
				  <div className="tip">
					  <h4>Grass</h4>
				  </div>
				  <div className="tip">
					  <h4>Poison</h4>
				  </div>
			  </div>
		  </div>
		  <div className="item">
			  <img src={`${Background}`} className="fundo" />
			  <img src={`${Pokemon}`} className="pokemon" />
			  <div className="nome">
				  <h2>Venusaur</h2>
			  </div>
			  <div className="tipo">
				  <div className="tip">
					  <h4>Grass</h4>
				  </div>
				  <div className="tip">
					  <h4>Poison</h4>
				  </div>
			  </div>
		  </div>
	  </div>

  </div>
);

export default Home
