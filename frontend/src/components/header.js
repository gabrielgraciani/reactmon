import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {CIDADES, CRUD_POKEMON, CRUD_ITEM, HOME, ITENS, LOGIN, POKEDEX} from 'routes';
import {useDispatch, useSelector} from "react-redux";
import {authLogout} from '../redux/actions/auth';

const Header = () =>{
	const wrapperRef = useRef(null);
	const [activeClass, setActiveClass] = useState('');

	const dispatch = useDispatch();
	const {usuario} = useSelector(store => store.auth);

	const logout = () => {
		dispatch(authLogout());
	};

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
					<div className={`premierball ${activeClass}`} onClick={change} id="pokebola"> </div>

					<ul>
						<Link to={HOME} onClick={change}>
							<li>Home</li>
						</Link>
						<Link to={POKEDEX} onClick={change}>
							<li>Pokedéx</li>
						</Link>
						<Link to={ITENS} onClick={change}>
							<li>Itens</li>
						</Link>
						<Link to={CIDADES} onClick={change}>
							<li>Cidades</li>
						</Link>

						{usuario ? (
							<>
								<Link to={CRUD_POKEMON} onClick={change}>
									<li>Crud Pokemon</li>
								</Link>

								<Link to={CRUD_ITEM} onClick={change}>
									<li>Crud Item</li>
								</Link>

								<div onClick={logout}>
									<li onClick={change}>Logout</li>
								</div>
							</>
						) : (
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