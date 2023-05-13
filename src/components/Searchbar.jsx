import React from "react";
import PropTypes from 'prop-types';

const Searchbar = ({ onInput, onSubmit }) => (   
        <header className="searchbar">
            <form className="searchform" onSubmit={onSubmit}>
                <button type="submit" className="searchform_button">
                    <span className="searchform_button_label">Search</span>
                </button>

                <input
                    className="searchform_input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={onInput}
                />
            </form>
        </header>
          
)

Searchbar.propTypes = {
    onInput: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default Searchbar;