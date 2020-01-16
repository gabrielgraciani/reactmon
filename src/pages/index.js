import React from 'react'

const Home = () => (
  <div id="wrap_pokemons">
	  <div className="indent">
		  <div className="item">
			  <img src={`${require("../assets/images/bg-item.png")}`} className="fundo" />
			  <img src={`${require("../assets/images/venusaur.png")}`} className="pokemon" />
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
			  <img src={`${require("../assets/images/bg-item.png")}`} className="fundo" />
			  <img src={`${require("../assets/images/venusaur.png")}`} className="pokemon" />
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
			  <img src={`${require("../assets/images/bg-item.png")}`} className="fundo" />
			  <img src={`${require("../assets/images/venusaur.png")}`} className="pokemon" />
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
			  <img src={`${require("../assets/images/bg-item.png")}`} className="fundo" />
			  <img src={`${require("../assets/images/venusaur.png")}`} className="pokemon" />
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
