import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

function CharacterList(props) {
    const {characterData, inputValue} = props;
    return(
            <ul className="CharacterList">
                {props.characterData
                    .filter(character => inputValue === '' || character.name.toLowerCase()
                    .includes(props.inputValue.toLowerCase()))
                    .map((character) => <li className="character" key={character.id}>
                        <CharacterCard
                            characterImage = {character.image}
                            characterName = {character.name}
                            characterSpecies = {character.species}
                        />
                </li>)}
            </ul>
    );
}

CharacterList.propTypes = {
    characterData: PropTypes.array.isRequired,
    inputValue: PropTypes.string.isRequired
}

export default CharacterList;