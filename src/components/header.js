import React, {Component} from 'react';

class Header extends Component{
	render(){
		return(
			<div id="wrap_header">
				<div className="indent">
					<div className="logo">
						<h2>Reactmon</h2>
					</div>

					<div className="hamburguer">
						<div className="risco"></div>
						<div className="risco"></div>
						<div className="risco"></div>
					</div>

					<div className="menu active">
						<div className="fechar">
							<div className="risco risco1"></div>
							<div className="risco risco2"></div>
						</div>
						<ul>
							<li>Home</li>
							<li>Pokedéx</li>
							<li>Itens</li>
							<li>Cidades</li>
						</ul>
					</div>

				</div>
			</div>
		)
	}
}

export default Header;