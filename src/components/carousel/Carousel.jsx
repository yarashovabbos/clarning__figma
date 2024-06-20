import  { Component } from 'react';
import './carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  goToNext = () => {
    const { currentIndex } = this.state;
    const { images } = this.props;
    this.setState({
      currentIndex: Math.min(currentIndex + 6, images.length - 6)
    });
  }

  goToPrev = () => {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: Math.max(currentIndex - 6, 0)
    });
  }

  goToIndex = (index) => {
    this.setState({ currentIndex: index });
  }

  render() {
    const { currentIndex } = this.state;
    const { images } = this.props;
    const visibleImages = images.slice(currentIndex, currentIndex + 6);

    return (
      <div className="container"> 
      <div className="carousel">
        <h1 className="carousel-title">Качество продукции подтверждают <span style={{color:"#EF7C00"}}>сертификаты</span> </h1>
        <div className="carousel-inner">
          {visibleImages.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Slide ${currentIndex + index}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" onClick={this.goToPrev}>
          &#10094;
        </button>
        <button className="carousel-control-next" onClick={this.goToNext}>
          &#10095;
        </button>
        <div className="carousel-dots">
          {Array.from({ length: Math.ceil(images.length / 6) }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === Math.floor(currentIndex / 6) ? 'active' : ''}`}
              onClick={() => this.goToIndex(index * 6)}
            ></button>
          ))}
        </div>
      </div></div>
     
    );
  }
}

export default Carousel;
