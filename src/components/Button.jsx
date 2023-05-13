import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
    return (
        <button type="button" className='button' onClick={onClick}>
            Load more
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;