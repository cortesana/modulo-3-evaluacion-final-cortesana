import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

function CharacterList(props) {
    const {characterData} = props;
    return(
        <div className="CharacterList-ctn">
            <ul className="CharacterList">
                {characterData
                    .map((character) => <li className="character" key={character.id}>
                        <CharacterCard
                            characterImage = {character.image}
                            characterName = {character.name}
                            characterSpecies = {character.species}
                        />
                </li>)}
            </ul>
        </div>
    );
}

CharacterList.propTypes = {
    characterData: PropTypes.array.isRequired
}

export default CharacterList;