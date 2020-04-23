import React from 'react'
import PropTypes from 'prop-types';

function SearchBar(props) {
    const {inputValue} = props;
    const getInputValue = evt => {
        props.getInputValue(evt.target.inputValue)
    }
    const onSubmitHandler = evt => {
        evt.preventDefault()
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <label>
                <input type="text" placeholder="Morty Smith" onChange={getInputValue} inputValue={inputValue}
                name="character name" />
            </label>
        </form>
    )
}

SearchBar.propTypes = {
    inputValue: PropTypes.string.isRequired
}

export default SearchBar;