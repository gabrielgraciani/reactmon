import React, {useContext} from 'react';
import {AuthContext} from 'contexts/auth';
import GitHubIcon from '@material-ui/icons/GitHub';

function Login () {
	const {login} = useContext(AuthContext);

	return(
		<>
		<div id="wrap_login">
			<div className="indent">
				<div className="titulo">
					<h3>Login with:</h3>
				</div>
				<button onClick={login}><GitHubIcon/></button>
			</div>
		</div>
		</>
	)
}

export default Login;