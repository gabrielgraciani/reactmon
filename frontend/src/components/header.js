import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {CIDADES, HOME, ITENS, LOGIN, POKEDEX} from '../routes';

const Header = () =>{
	const wrapperRef = useRef(null);
	const [activeClass, setActiveClass] = useState('');

	const change = () => {
		setActiveClass(activeClass === '' ? 'active' : '');
	};

	const useVerificarClick = (ref) => {
		const handleClick = (event) =>{
			if (ref.current && !ref.current.contains(event.target)) {
				setActiveClass('');
			}
		};

		const escFunction = (event) =>{
			if(event.keyCode === 27){
				setActiveClass('');
			}
		};

		useEffect(() => {
			document.addEventListener("mousedown", handleClick);
			document.addEventListener("keydown", escFunction, false);
		});
	};

	useVerificarClick(wrapperRef);

	return(
		<div id="wrap_header">
			<div className="indent">
				<div className="logo">
					<Link to={HOME}>
						<h2>Reactmon</h2>
					</Link>
				</div>

				<div className={`pokeball ${activeClass}`} onClick={change} id="pokebola"> </div>

				<div className={`menu ${activeClass}`} ref={wrapperRef} id="menu">
					<div className={`fechar ${activeClass}`} id="fechar"  onClick={change}>
						<div className="risco risco1"> </div>
						<div className="risco risco2"> </div>
					</div>
					<ul>
						<Link to={HOME}>
							<li onClick={change}>Home</li>
						</Link>
						<Link to={POKEDEX}>
							<li onClick={change}>Pokedéx</li>
						</Link>
						<Link to={ITENS}>
							<li onClick={change}>Itens</li>
						</Link>
						<Link to={CIDADES}>
							<li onClick={change}>Cidades</li>
						</Link>
						<Link to={LOGIN}>
							<li onClick={change}>Login</li>
						</Link>
					</ul>
				</div>

			</div>
		</div>
	);

};

export default Header;