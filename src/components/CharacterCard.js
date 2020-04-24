import React from 'react'
import PropTypes from 'prop-types';

function CharacterCard(props) {
    const {characterImage, characterName, characterSpecies} = props;
    return(
        <div className="CharacterCard-ctn">
            <img alt={characterName} src={characterImage}/>
            <h3 className="card-text">{characterName}</h3>
            <p className="card-text">{characterSpecies}</p>
        </div>
    );
}

CharacterCard.propTypes = {
    characterImage: PropTypes.string,
    characterName: PropTypes.string,
    characterSpecies: PropTypes.string
}

export default CharacterCard;