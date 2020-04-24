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
        <form className="Searchbar" onSubmit={onSubmitHandler}>
            <input className="Searchbar-input" type="text" placeholder="  Search" onChange={getInputValue} value={value} name="character name" />
        </form>
    )
}

SearchBar.propTypes = {
    value: PropTypes.string.isRequired
}

export default SearchBar;