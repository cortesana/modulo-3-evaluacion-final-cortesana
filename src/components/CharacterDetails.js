import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CharacterDetails(props) {
    console.log(props);
    const {image, name, status, species, origin, episode} = props.character; //CHARACTER UNDEFINED
    return(
        <section className="CharacterDetails-ctn">
            <Link to="/">Go back</Link>
            <div className="Details-ctn">
                <img alt={name} src={image}/>
                <h3>{name}</h3>
                <p><span>Status:</span> {status}</p>
                <p><span>Species:</span> {species}</p>
                <p><span>Origin:</span> {origin.name}</p>
                <p><span>Episodes:</span> {episode.length}</p>
            </div>
        </section>
    );
}

CharacterDetails.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    origin: PropTypes.number,
    episode: PropTypes.string,
}

export default CharacterDetails;