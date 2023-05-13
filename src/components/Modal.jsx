import PropTypes from 'prop-types';

const Modal = ({ src, alt, showModal, onClose }) => {
  return (
    showModal && (
      <div className="overlay" onClick={onClose}>
        <div className="modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  showModal: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;