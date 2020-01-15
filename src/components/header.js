import React, {Component} from 'react';

class Header extends Component{
	constructor(props) {
		super(props);
		this.state = {isOpen: false};
		this.changeSkin = this.changeSkin.bind(this);
	}

	changeSkin() {
		this.setState({isOpen: !this.state.isOpen});
	}

	render(){
		return(
			<div id="wrap_header">
				<div className="indent">
					<div className="logo">
						<h2>Reactmon</h2>
					</div>

					<div className={`hamburguer ${this.state.isOpen ? 'active' : ''}`} onClick={this.changeSkin}>
						<div className="risco risco1"></div>
						<div className="risco risco2"></div>
						<div className="risco risco3"></div>
					</div>

					<div className={`menu ${this.state.isOpen ? 'active' : ''}`}>
						<div className={`fechar ${this.state.isOpen ? 'active' : ''}`}  onClick={this.changeSkin}>
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