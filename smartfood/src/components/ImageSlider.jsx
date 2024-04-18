import React from 'react';
import "../components/ImageSlider/ImageSlider.css"

class ImageSlider extends React.Component {
  render() {
    return (
      <div className="image-container">
        <div className="wrapper">
          {this.props.images.map((image, index) => (
            <div key={index}>
            <button className='image-button'>
            <img className='image-slider' src={image.src} alt={image.alt} />
            </button>
            <p className='image-title'>{image.text}</p>
          </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageSlider;