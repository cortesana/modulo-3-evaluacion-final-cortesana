import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CharacterDetails(props) {
    const {image, name, status, species, origin, episode} = props.character;
    return(
        <section className="CharacterDetails-ctn">
            <Link className="Details-link" to="/">Go back</Link>
            <div className="Details-ctn">
                <img alt={name} src={image}/>
                <div className="Details-text-ctn">
                    <h3><span className="Details-text">{name}</span></h3>
                    <p><span className="Details-text">Status:</span> {status}</p>
                    <p><span className="Details-text">Species:</span> {species}</p>
                    <p><span className="Details-text">Origin:</span> {origin.name}</p>
                    <p><span className="Details-text">Episodes:</span> {episode.length}</p>
                </div>
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