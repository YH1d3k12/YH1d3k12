import { useState } from 'react';
import ProjectSlider from '../ProjectSlider';
import ProjectModal from '../ProjectModal';
import projects from '../../data/projects';
import './styles.css';

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

export default function ProjectSection() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [selectedProject, setSelectedProject] = useState<
        (typeof projects)[0] | null
    >(null);

    const filteredProjects =
        selectedTags.length === 0
            ? projects
            : projects.filter(project =>
                  selectedTags.some(tag => project.tags.includes(tag))
              );

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    return (
        <section id="project" className="project-section section-padding">
            <div className="project-section-text">
                <h2>My Projects</h2>
                <p>
                    lorem ipsum alguma coisa de texto aqui só para preencher e
                    ver como fica no layout
                </p>
                <div className="project-tag-container">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`project-tag-button ${
                                selectedTags.includes(tag) ? 'active' : ''
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                    {selectedTags.length > 0 && (
                        <button
                            onClick={() => setSelectedTags([])}
                            className="project-tag-clear-button"
                        >
                            Clear Tags
                        </button>
                    )}
                </div>
            </div>
            <div className="project-section-container">
                <ProjectSlider
                    projects={filteredProjects}
                    onProjectClick={setSelectedProject}
                />
            </div>
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
