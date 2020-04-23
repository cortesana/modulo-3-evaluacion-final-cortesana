import React from 'react'
import PropTypes from 'prop-types';

function SearchBar(props) {
    const {inputvalue} = props;
    const getInputValue = evt => {
        props.getInputValue(evt.target.inputvalue)
    }
    const onSubmitHandler = evt => {
        evt.preventDefault()
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <label>
                <input type="text" placeholder="Morty Smith" onChange={getInputValue} value={inputvalue}
                name="character name" />
            </label>
        </form>
    )
}

SearchBar.propTypes = {
    inputvalue: PropTypes.string.isRequired
}

export default SearchBar;