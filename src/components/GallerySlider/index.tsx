import { useState, useEffect } from 'react';
import './styles.css';

interface GallerySliderProps {
    slides?: string[];
}

export default function GallerySlider({ slides = [] }: GallerySliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return slides.length === 0 ? (
        <></>
    ) : (
        <div className="gallery-slider">
            <div className="gallery-slider-container">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt="slide image"
                        className={index === currentSlide ? 'active' : ''}
                        style={{ opacity: index === currentSlide ? 1 : 0 }}
                    />
                ))}
            </div>
            <div className="gallery-slider-nav">
                {slides.map((slide, index) => (
                    <a
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={index === currentSlide ? 'active' : ''}
                    />
                ))}
            </div>
        </div>
    );
}
