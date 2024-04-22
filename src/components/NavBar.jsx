import { navBarPropTypes } from './PokemonTypes.jsx';

function NavBar({ pokemonIndex, pokemonList, nextPokemon, previousPokemon }) {
	return (
		<>
			{(pokemonIndex > 0 && (
				<button onClick={previousPokemon}>Previous</button>
			)) || <button disabled>Previous</button>}
			{(pokemonIndex < pokemonList.length - 1 && (
				<button onClick={nextPokemon}>Next</button>
			)) || <button disabled>Next</button>}
		</>
	);
}

NavBar.propTypes = navBarPropTypes;

export default NavBar;
