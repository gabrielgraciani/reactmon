import React, {createContext, useState} from 'react';
import firebase from '../services/firebase';


export const AuthContext = createContext();

function Auth({children}){
	const [userInfo, setUserInfo] = useState({
		isUserLoggedIn: false,
		user: null
	});

	const login = () => {
		const provider = new firebase.auth.GithubAuthProvider();
		firebase.auth().signInWithRedirect(provider)
	};

	const logout = () => {
		firebase.auth().signOut().then(() => {
			console.log('deslogou!');
			setUserInfo({
				isUserLoggedIn: false,
				user: null
			})
		})
	};

	return(
		<AuthContext.Provider value={{
			login,
			logout,
			userInfo,
			setUserInfo
		}}>
			{children}
		</AuthContext.Provider>
	)
}

export default Auth;