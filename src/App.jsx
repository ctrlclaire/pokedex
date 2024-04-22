import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import PokemonCard from './components/PokemonCard.jsx';
import { pokemonList } from './components/PokemonList.jsx';

function App() {
	const [pokemonIndex, setPokemonIndex] = React.useState(0);
	const [pokemonSelected, setPokemonSelected] = React.useState(null);

	function nextPokemon() {
		if (pokemonIndex !== null && pokemonIndex < pokemonList.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		}
	}

	function previousPokemon() {
		if (pokemonIndex !== null && pokemonIndex > 0) {
			setPokemonIndex(pokemonIndex - 1);
		}
	}

	function handlePokemonSelection(name) {
		const index = pokemonList.findIndex((p) => p.name === name);
		if (index !== -1) {
			setPokemonIndex(index);
			setPokemonSelected(name);
		}
	}

	console.log(
		`Index: ${pokemonIndex}, Name: ${pokemonList[pokemonIndex].name}`
	);

	return (
		<>
			<NavBar
				pokemonIndex={pokemonIndex}
				setPokemonIndex={setPokemonIndex}
				pokemonList={pokemonList}
				nextPokemon={nextPokemon}
				previousPokemon={previousPokemon}
			/>
			{pokemonSelected ? (
				<PokemonCard pokemon={pokemonList[pokemonIndex]} isSelected={true} />
			) : (
				pokemonList.map((pokemon) => (
					<PokemonCard
						key={pokemon.name}
						pokemon={pokemon}
						onClick={() => handlePokemonSelection(pokemon.name)}
						isSelected={pokemonSelected === pokemon.name}
					/>
				))
			)}
		</>
	);
}

export default App;
