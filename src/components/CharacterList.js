import React from 'react';
import {Link} from 'react-router-dom';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

function CharacterList(props) {
    const {characterData, value} = props;
    return(
        <ul className="CharacterList">
            {characterData
                .filter(character => value === '' || character.name.toLowerCase()
                .includes(value.toLowerCase()))
                .map((character) => <li className="character" key={character.id}>
                    <Link className="ListLink" to={`/character/${character.id}`}>
                        <CharacterCard
                            characterImage = {character.image}
                            characterName = {character.name}
                            characterSpecies = {character.species}
                        />
                    </Link>
                </li>)}
        </ul>
    );
}

CharacterList.propTypes = {
    characterData: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired
}

export default CharacterList;