import PropTypes from 'prop-types';


const ImageGalleryItem = ({ src, alt, onClick }) => {
    return (
        <li className="imagegalleryitem">
            <img src={src} alt={alt} onClick={onClick} />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default ImageGalleryItem;