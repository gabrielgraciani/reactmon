import React from 'react';
import Potion from 'assets/images/potion.png';
import SPotion from 'assets/images/spotion.png';
import HPotion from 'assets/images/hpotion.png';
import MPotion from 'assets/images/mpotion.png';

const Itens = () => (
	<div id="wrap_itens">
		<div className="indent">
			<div className="item">
				<div className="imagem">
					<img src={Potion} alt="pocao" />
				</div>
				<div className="conteudo">
					<div className="nome">
						<h4>Poção</h4>
					</div>
					<div className="descricao">
						<span>Poção utilizada tanto em batalhas pokémon ou em capturas</span>
					</div>
				</div>
				<div className="footer">
					<h4>Recupera 20 HP</h4>
				</div>
			</div>

			<div className="item">
				<div className="imagem">
					<img src={SPotion} alt="pocao" />
				</div>
				<div className="conteudo">
					<div className="nome">
						<h4>Super Poção</h4>
					</div>
					<div className="descricao">
						<span>Poção utilizada tanto em batalhas pokémon ou em capturas</span>
					</div>
				</div>
				<div className="footer">
					<h4>Recupera 50 HP</h4>
				</div>
			</div>

			<div className="item">
				<div className="imagem">
					<img src={HPotion} alt="pocao" />
				</div>
				<div className="conteudo">
					<div className="nome">
						<h4>Hyper Poção</h4>
					</div>
					<div className="descricao">
						<span>Poção utilizada tanto em batalhas pokémon ou em capturas</span>
					</div>
				</div>
				<div className="footer">
					<h4>Recupera 200 HP</h4>
				</div>
			</div>

			<div className="item">
				<div className="imagem">
					<img src={MPotion} alt="pocao" />
				</div>
				<div className="conteudo">
					<div className="nome">
						<h4>Max Potion</h4>
					</div>
					<div className="descricao">
						<span>Poção utilizada tanto em batalhas pokémon ou em capturas</span>
					</div>
				</div>
				<div className="footer">
					<h4>Recupera todo o HP</h4>
				</div>
			</div>
		</div>
	</div>
);

export default Itens;