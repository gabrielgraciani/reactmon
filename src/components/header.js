import React, {useState} from 'react';
import Link from 'next/link';

function Header(){

	const [activeClass, setActiveClass] = useState('');

	const change = () => {
		setActiveClass(activeClass === '' ? 'active' : '');
	};

	return(
		<div id="wrap_header">
			<div className="indent">
				<div className="logo">
					<h2>Reactmon</h2>
				</div>

				<div className={`pokeball ${activeClass}`} onClick={change}></div>

				{/*<div className={`hamburguer ${activeClass}`} onClick={change}>
					<div className="risco risco1"></div>
					<div className="risco risco2"></div>
					<div className="risco risco3"></div>
				</div>*/}

				<div className={`menu ${activeClass}`}>
					<div className={`fechar ${activeClass}`}  onClick={change}>
						<div className="risco risco1"></div>
						<div className="risco risco2"></div>
					</div>
					<ul>
						<Link href="/">
							<li onClick={change}>Home</li>
						</Link>
						<Link href="/pokedex">
							<li onClick={change}>Pokedéx</li>
						</Link>
						<Link href="/itens">
							<li onClick={change}>Itens</li>
						</Link>
						<Link href="/cidades">
							<li onClick={change}>Cidades</li>
						</Link>
					</ul>
				</div>

			</div>
		</div>
	);

}

export default Header;