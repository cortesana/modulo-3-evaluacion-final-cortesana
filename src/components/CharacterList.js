import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

function CharacterList(props) {
    const {characterData, inputvalue} = props;
    console.log(characterData);
    console.log(inputvalue);
    return(
        <ul className="CharacterList">
            {characterData
                .filter(character => inputvalue === '' || character.name.toLowerCase()
                .includes(inputvalue.toLowerCase()))
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
    inputvalue: PropTypes.string.isRequired
}

export default CharacterList;