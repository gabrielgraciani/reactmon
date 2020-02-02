import React from 'react';
import Banner from 'components/banner';
import Search from 'components/search';

const Cidades = () => (
	<>
		<Banner className="cidades" titulo="Cidades">
			<p>Muitas regiões foram descritas na franquia de jogos eletrônicos, desenhos animados e
				quadrinhos Pokémon. Cada uma das gerações de RPGs Originais de Pokémon introduziu uma nova Região.
				Há ainda, algumas Regiões introduzidas em games Spin-offs, como Pokémon Ranger,
				Pokémon Mystery Dungeon e principalmente Pokémon Colosseum e Pokémon XD. Nos jogos,
				não é possível acessar outras Regiões de outros games, exceto Kanto, acessível em Pokémon Gold,
				Silver & Crystal após a vitória sobre a Elite dos Quatro.</p>

			<p>Todas as Regiões onde se passa um RPG Original são baseadas em regiões reais do Japão
				e a região de Orre também é baseada em uma área do Japão. As regiões também podem ser
				consideradas como países, pois, embora não haja significativa diferença cultural entre
				os moradores da diferentes regiões, nas versões em inglês dos jogos Pokémon Gold
				e Pokémon Silver, o mapa refere-se a Kanto e Johto como countrys.</p>
		</Banner>

		<Search placeholder="Pesquise uma cidade" />

		<div id="wrap_cidades">
			<div className="indent">
				<div className="cidade">
					<div className="imagem">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCesKFa9Bj3NHo8TZJZGm3Ml-a8GoS4WT2slAe18nNrm3QTJ0z" alt="cidade"/>

						<svg class="wavy" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
							<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none'}}></path>
						</svg>
					</div>
					<div className="conteudo">
						<div className="nome">
							<h4>Lorem ipsum</h4>
						</div>
						<div className="descricao">
							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor
								praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus
								quam facere illo et quisquam quia earum nesciunt porro.</span>
						</div>
					</div>
				</div>

				<div className="cidade">
					<div className="imagem">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCesKFa9Bj3NHo8TZJZGm3Ml-a8GoS4WT2slAe18nNrm3QTJ0z" alt="cidade"/>

						<svg class="wavy" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
							<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none'}}></path>
						</svg>
					</div>
					<div className="conteudo">
						<div className="nome">
							<h4>Lorem ipsum</h4>
						</div>
						<div className="descricao">
							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor
								praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus
								quam facere illo et quisquam quia earum nesciunt porro.</span>
						</div>
					</div>
				</div>

				<div className="cidade">
					<div className="imagem">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCesKFa9Bj3NHo8TZJZGm3Ml-a8GoS4WT2slAe18nNrm3QTJ0z" alt="cidade"/>

						<svg class="wavy" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
							<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none'}}></path>
						</svg>
					</div>
					<div className="conteudo">
						<div className="nome">
							<h4>Lorem ipsum</h4>
						</div>
						<div className="descricao">
							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor
								praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus
								quam facere illo et quisquam quia earum nesciunt porro.</span>
						</div>
					</div>
				</div>

				<div className="cidade">
					<div className="imagem">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCesKFa9Bj3NHo8TZJZGm3Ml-a8GoS4WT2slAe18nNrm3QTJ0z" alt="cidade"/>

						<svg class="wavy" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
							<path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: 'none'}}></path>
						</svg>
					</div>
					<div className="conteudo">
						<div className="nome">
							<h4>Lorem ipsum</h4>
						</div>
						<div className="descricao">
							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor
								praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus
								quam facere illo et quisquam quia earum nesciunt porro.</span>
						</div>
					</div>
				</div>

			</div>
		</div>
	</>
);

export default Cidades;