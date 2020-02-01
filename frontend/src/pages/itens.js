import React from 'react';

const Itens = () => (
	<div id="wrap_itens">
		<div className="indent">
			<div className="item">
				<div className="imagem">
					<img src="https://pokemythology.net/conteudo/imgs/dw/item/Dream_Potion_Sprite.png" alt="pocao" />
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
					<img src="https://pokemythology.net/conteudo/imgs/dw/item/Dream_Super_Potion_Sprite.png" alt="pocao" />
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
					<img src="https://pokemythology.net/conteudo/imgs/dw/item/Dream_Hyper_Potion_Sprite.png" alt="pocao" />
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
					<img src="https://pokemythology.net/conteudo/imgs/dw/item/Dream_Max_Potion_Sprite.png" alt="pocao" />
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