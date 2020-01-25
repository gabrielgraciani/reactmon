import React, {useState, useRef, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {CIDADES, CRUD, HOME, ITENS, LOGIN, POKEDEX} from '../routes';
import {AuthContext} from '../contexts/auth';

const Header = () =>{
	const wrapperRef = useRef(null);
	const [activeClass, setActiveClass] = useState('');
	const {userInfo, logout} = useContext(AuthContext);
	const {isUserLoggedIn} = userInfo;

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

						{isUserLoggedIn && (
							<>
								<Link to={CRUD}>
									<li onClick={change}>Crud</li>
								</Link>

							<div onClick={logout}>
								<li onClick={change}>Logout</li>
							</div>
							</>
						)}

						{!isUserLoggedIn && (
							<Link to={LOGIN}>
								<li onClick={change}>Login</li>
							</Link>
						)}

					</ul>
				</div>

			</div>
		</div>
	);

};

export default Header;