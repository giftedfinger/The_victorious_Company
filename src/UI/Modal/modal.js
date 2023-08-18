
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (e) => {
    let img=
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const galleryImages = [
    { id: 1, src: 'image1.jpg', alt: 'Image 1' },
    { id: 2, src: 'image2.jpg', alt: 'Image 2' },
    { id: 3, src: 'image3.jpg', alt: 'Image 3' },
    // Add more images here
  ];

  return (
    <div className="gallery">
      {
      galleryImages.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          onClick={() => openModal()}
          className="thumbnail"
        />
      ))}

      {selectedImage && (
        <div className="modal">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="modal-image"
          />
          <button onClick={closeModal} className="close-button">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;