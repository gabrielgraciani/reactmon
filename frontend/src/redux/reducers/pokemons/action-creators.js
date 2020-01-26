import {ADD_POKEMON} from './actions';

export const addPokemon = ({nome, tipo, altura, peso, fraquezas, evolucoes}) => ({
	type: ADD_POKEMON,
	payload: {nome, tipo, altura, peso, fraquezas, evolucoes}
});