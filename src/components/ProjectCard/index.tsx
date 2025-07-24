import { useTranslation } from 'react-i18next';
import { Project } from '../../services/project';
import './styles.css';

export interface ProjectCardProps {
    project: Project;
    onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    const { t } = useTranslation();

    return (
        <div onClick={onClick}>
            <div className="project-card">
                <div className="project-card-image">
                    <img src={project.image} alt="Project Thumbnail" />
                </div>
                <div className="project-card-content">
                    <h3>{t(project.title)}</h3>
                    {project.tags && (
                        <div className="project-card-tags">
                            {project.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="project-card-tag"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    <p>{t(project.description)}</p>
                </div>
            </div>
        </div>
    );
}
