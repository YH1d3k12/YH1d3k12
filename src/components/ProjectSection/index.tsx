import { useState } from 'react';
import projects from '../../data/projects';
import './styles.css';

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

export default function ProjectSection() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    return (
        <section className="project-section section-padding">
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
                <div>
                    <h3>card 1</h3>
                </div>
            </div>
        </section>
    );
}
