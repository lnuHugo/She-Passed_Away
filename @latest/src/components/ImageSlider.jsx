import { useState } from "react"

const ImageSlider = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex)=> 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="image-slider">
            <button onClick={goToPrevSlide}> | </button>
            <img src="{images[currentIndex]}" alt={`Slide ${currentIndex}`} />
            <button onClick={goToNextSlide}> | </button>
        </div>
    );
};

export default ImageSlider;