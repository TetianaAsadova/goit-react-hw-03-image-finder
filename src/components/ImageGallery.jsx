import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => {
    
    return (
        <ul className="imagegallery">
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    src={image.webformatURL}
                    alt={image.tags}
                    onClick={() => onImageClick(image.largeImageURL, image.tags)}
                />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.array,
    onImageClick: PropTypes.func,
};

export default ImageGallery