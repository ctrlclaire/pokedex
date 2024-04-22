// propTypes.js
import PropTypes from 'prop-types';

export const pokemonCardPropTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		imgSrc: PropTypes.string,
	}).isRequired,
};

export const navBarPropTypes = {
	setPokemonIndex: PropTypes.func.isRequired,
	pokemonIndex: PropTypes.number.isRequired,
	pokemonList: PropTypes.array.isRequired,
	nextPokemon: PropTypes.func.isRequired,
	previousPokemon: PropTypes.func.isRequired,
};
