import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Project } from '../../services/project';
import ProjectCard from '../ProjectCard';
import './styles.css';

export default function ProjectSlider({
    projects,
    onProjectClick,
}: {
    projects: Project[];
    onProjectClick: (project: Project) => void;
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const maxIndex = Math.max(0, projects.length - cardsPerPage);

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(prev - cardsPerPage, 0));
    };

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(prev + cardsPerPage, maxIndex));
    };

    const visibleProjects = projects.slice(
        currentIndex,
        currentIndex + cardsPerPage
    );

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width <= 768) {
                setCardsPerPage(1);
            } else if (width <= 1280) {
                setCardsPerPage(2);
            } else {
                setCardsPerPage(3);
            }
        }
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="project-slider-container">
            <button
                className="project-slide-button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
            >
                <FaAngleLeft size={48} />
            </button>

            <div className="project-slider">
                {visibleProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => onProjectClick(project)}
                    />
                ))}
            </div>

            <button
                className="project-slide-button"
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
            >
                <FaAngleRight size={48} />
            </button>
        </div>
    );
}
