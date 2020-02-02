import React from 'react';
import Potion from 'assets/images/potion.png';
import SPotion from 'assets/images/spotion.png';
import HPotion from 'assets/images/hpotion.png';
import MPotion from 'assets/images/mpotion.png';
import Banner from 'components/banner';

const Itens = () => (
	<>
		<Banner className="itens" titulo="Itens">
			<p>No universo de Pokémon existem diversos itens a nossa disposição e cada um possui a sua
				funcionalidade e importância.</p>
			<p>Os <b>Held Itens</b> são itens que podem ser segurados por seus Pokémon e alguns são considerados
				os mais importantes para quem joga na modalidade competitiva, proporcionando diversas vantagens
				ao Pokémon portador, seja aumento dos atributos ofensivos e defensivos, diminuição de dados causados
				pelo oponente, recuperação de HP (health points), dentre outros. </p>
			<p>Além disso, as Berries também são muito utilizadas no competitivo e ao contrário dos itens que
				só possuem efeito em batalha  elas podem ser utilizadas fora dela também.</p>
		</Banner>


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
	</>
);

export default Itens;