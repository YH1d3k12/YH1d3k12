import { IoClose, IoLogoGithub, IoDesktopSharp } from 'react-icons/io5';
import { Project } from '../../services/project';
import GallerySlider from '../GallerySlider';
import './styles.css';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
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
                    <GallerySlider slides={project.gallery} />
                </div>
                <div className="project-modal-content">
                    <div className="col pmc-separator">
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
                    <div className="pmc-separator">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                id="github-link"
                            >
                                <IoLogoGithub size={24} />
                                GitHub
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                id="live-link"
                            >
                                <IoDesktopSharp size={24} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
