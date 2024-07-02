
import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import CSS for styling (create this file)


const ImageSlider = ({ images, slideInterval }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, slideInterval);

        return () => clearInterval(interval);
    }, [images.length, slideInterval]);

    return (
        <div className="slider">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
        </div>
    );
};


export default ImageSlider;