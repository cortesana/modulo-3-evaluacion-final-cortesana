import React from 'react'
import PropTypes from 'prop-types';

function SearchBar(props) {
    const {value} = props;
    const getInputValue = evt => {
        props.getInputValue(evt.target.value)
    }
    const onSubmitHandler = evt => {
        evt.preventDefault()
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <label>
                <input type="text" placeholder="Morty Smith" onChange={getInputValue} value={value}
                name="character name" />
            </label>
        </form>
    )
}

SearchBar.propTypes = {
    value: PropTypes.string.isRequired
}

export default SearchBar;