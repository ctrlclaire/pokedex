// import PropTypes from 'prop-types';
import { pokemonCardPropTypes } from './PokemonTypes.jsx';

function PokemonCard({ pokemon, isSelected, onClick }) {
	return (
		<div>
			<ul>
				<li>
					<figure>
						<div
							onClick={onClick}
							style={{ border: isSelected ? '2px solid blue' : 'none' }}
						>
							<figcaption>{pokemon.name}</figcaption>
							{pokemon.imgSrc ? (
								<img src={pokemon.imgSrc} alt={`${pokemon.name}`} />
							) : (
								<p>Img: ???</p>
							)}
						</div>
					</figure>
				</li>
			</ul>
		</div>
	);
}

PokemonCard.propTypes = pokemonCardPropTypes;

export default PokemonCard;
