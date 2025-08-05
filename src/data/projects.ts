import { Project } from '../services/project';
import powebPortrait from '../assets/gallery/poweb.jpeg';
import powebA from '../assets/gallery/powebA.jpeg';
import powebB from '../assets/gallery/powebB.jpeg';
import powebC from '../assets/gallery/powebC.jpeg';

const projects: Project[] = [
    {
        id: 1,
        title: 'projects.poweb.title',
        description: 'projects.poweb.description',
        image: powebPortrait,
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
        gallery: [powebA, powebB, powebC],
    },
];

export default projects;
