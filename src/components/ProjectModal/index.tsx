import { useTranslation } from 'react-i18next';
import { IoClose, IoLogoGithub, IoDesktopSharp } from 'react-icons/io5';
import { Project } from '../../services/project';
import GallerySlider from '../GallerySlider';
import './styles.css';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const { t } = useTranslation();

    return (
        <div className="modal-veil">
            <div className="project-modal">
                <div className="project-modal-title">
                    <h2>{t(project.title)}</h2>
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
                            <h3>{t('projectModal.about')}</h3>
                            <p>{t(project.detailedDescription)}</p>
                        </div>
                        <div>
                            <h3>{t('projectModal.features')}</h3>
                            <ul>
                                {project.features.map((feature, index) => (
                                    <li key={index}>{t(feature)}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {(project.githubUrl || project.liveUrl) && (
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
                    )}
                </div>
            </div>
        </div>
    );
}
