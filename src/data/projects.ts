import { Project } from '../services/project';
import powebPortrait from '../assets/gallery/poweb.jpeg';
import powebA from '../assets/gallery/powebA.jpeg';
import powebB from '../assets/gallery/powebB.jpeg';
import powebC from '../assets/gallery/powebC.jpeg';
import icsPortrait from '../assets/gallery/ICS.png';
import icsA from '../assets/gallery/ICSA.png';
import icsB from '../assets/gallery/ICSB.png';
import icsC from '../assets/gallery/ICSC.png';

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
    {
        id: 2,
        title: 'projects.iconsCharacterSheet.title',
        description: 'projects.iconsCharacterSheet.description',
        image: icsPortrait,
        tags: ['React', 'TypeScript'],
        detailedDescription: 'projects.iconsCharacterSheet.detailedDescription',
        features: [
            'projects.iconsCharacterSheet.features.characterContext',
            'projects.iconsCharacterSheet.features.attributeCalculation',
            'projects.iconsCharacterSheet.features.characterFile',
        ],
        githubUrl: 'https://github.com/YH1d3k12/icons-character-sheet',
        liveUrl: 'https://yh1d3k12.github.io/icons-character-sheet/',
        gallery: [icsA, icsB, icsC],
    },
];

export default projects;
