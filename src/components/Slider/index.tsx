import { useState, useEffect } from 'react';
import './styles.css';

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            id: 'slide-1',
            src: 'https://media.istockphoto.com/id/2031594195/pt/foto/devops-the-synchronization-concept-on-the-virtual-screen.jpg?s=2048x2048&w=is&k=20&c=j6MmpJKvVwFdujluDdIsG0f6niF1f0sCf8kkcjSoWcQ=',
        },
        {
            id: 'slide-2',
            src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 'slide-3',
            src: 'https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    const nextSlide = () => {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="slider">
            <div className="slider-container">
                {slides.map((slide, index) => (
                    <img
                        key={slide.id}
                        src={slide.src}
                        alt=""
                        className={index === currentSlide ? 'active' : ''}
                        style={{ opacity: index === currentSlide ? 1 : 0 }}
                        onClick={() =>
                            console.log('clicked image', currentSlide)
                        }
                    />
                ))}
            </div>
            <div className="slider-nav">
                {slides.map((slide, index) => (
                    <a
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        className={index === currentSlide ? 'active' : ''}
                    />
                ))}
            </div>
        </div>
    );
}
