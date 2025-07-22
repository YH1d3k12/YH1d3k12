import { useEffect, useState } from 'react';
import { Project } from '../../services/project';
import Slider from '../Slider';
import { IoClose } from 'react-icons/io5';
import './styles.css';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <div className="modal-veil">
            <div className="project-modal">
                <div className="project-modal-title">
                    <h2>{project.title}</h2>
                    <button onClick={onClose}>
                        <IoClose size={24} />
                    </button>
                </div>
                <div className="project-modal-gallery">
                    <Slider />
                </div>
                <div className="project-modal-content">
                    <div>
                        <h3>About</h3>
                        <p>{project.detailedDescription}</p>
                    </div>
                    <div>
                        <h3>Features</h3>
                        <ul>
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
