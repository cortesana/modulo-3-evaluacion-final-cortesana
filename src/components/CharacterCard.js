import React from 'react'
import PropTypes from 'prop-types';

function CharacterCard(props) {
    const {characterImage, characterName, characterSpecies} = props;
    return(
        <div className="CharacterCard-ctn">
            <img src={characterImage}/>
            <h3>{characterName}</h3>
            <p>{characterSpecies}</p>
        </div>
    );
}

CharacterCard.propTypes = {
    characterImage: PropTypes.string,
    characterName: PropTypes.string,
    characterSpecies: PropTypes.string
}

export default CharacterCard;