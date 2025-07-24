import { Project } from '../services/project';
import placeholder from '../assets/gallery/placeholder.svg';
import a from '../assets/gallery/a.jpg';
import b from '../assets/gallery/b.jpeg';
import c from '../assets/gallery/c.jpeg';

const projects: Project[] = [
    {
        id: 1,
        title: 'projects.poweb.title',
        description: 'projects.poweb.description',
        image: placeholder,
        tags: ['React', 'Node', 'TypeScript'],
        detailedDescription: 'projects.poweb.detailedDescription',
        features: [
            'projects.poweb.features.auth',
            'projects.poweb.features.profile',
            'projects.poweb.features.files',
            'projects.poweb.features.pagination',
        ],
        githubUrl: '',
        liveUrl: '',
        gallery: [a, b, c],
    },
];

export default projects;
