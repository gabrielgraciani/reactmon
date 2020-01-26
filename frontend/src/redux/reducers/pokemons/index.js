import createReducer from '../create-reducer';
import {ADD_POKEMON} from './actions';

const initialState = {};

const users = createReducer(initialState, {
	[ADD_POKEMON]: (state, action) => ({
		...state,
		[action.payload.id]: {
			nome: action.payload.nome,
			tipo: action.payload.tipo,
			altura: action.payload.altura,
			peso: action.payload.peso,
			fraquezas: action.payload.fraquezas,
			evolucoes: action.payload.evolucoes
		}
	})
});

export default users;