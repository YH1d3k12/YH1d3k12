import { Project } from '../services/project';
import placeholder from '../assets/gallery/placeholder.svg';
import a from '../assets/gallery/a.jpg';
import b from '../assets/gallery/b.jpeg';
import c from '../assets/gallery/c.jpeg';

const projects: Project[] = [
    {
        id: 1,
        title: 'E-commerce Platform 1',
        description:
            'Plataforma completa de e-commerce com painel administrativo',
        image: placeholder,
        tags: ['React', 'Node.js'],
        detailedDescription:
            'Uma plataforma de e-commerce completa desenvolvida com React e Node.js, incluindo sistema de pagamentos, gerenciamento de produtos, carrinho de compras e painel administrativo.',
        features: [
            'Sistema de autenticação completo',
            'Integração com gateway de pagamento',
            'Painel administrativo para gerenciar produtos',
            'Carrinho de compras persistente',
            'Sistema de avaliações e comentários',
        ],
        githubUrl: '',
        liveUrl: '',
        gallery: [a, b, c],
    },
    {
        id: 2,
        title: 'E-commerce Platform 2',
        description:
            'Plataforma completa de e-commerce com painel administrativo',
        image: placeholder,
        tags: ['MongoDB', 'Stripe'],
        detailedDescription:
            'Uma plataforma de e-commerce completa desenvolvida com React e Node.js, incluindo sistema de pagamentos, gerenciamento de produtos, carrinho de compras e painel administrativo.',
        features: [
            'Sistema de autenticação completo',
            'Integração com gateway de pagamento',
            'Painel administrativo para gerenciar produtos',
            'Carrinho de compras persistente',
            'Sistema de avaliações e comentários',
        ],
        githubUrl: 'https://github.com/',
        liveUrl: 'https://youtube.com/',
        gallery: [a, b, c],
    },
    {
        id: 3,
        title: 'E-commerce Platform 3',
        description:
            'Plataforma completa de e-commerce com painel administrativo',
        image: placeholder,
        tags: ['Java', 'Spring Boot', 'MySQL'],
        detailedDescription:
            'Uma plataforma de e-commerce completa desenvolvida com React e Node.js, incluindo sistema de pagamentos, gerenciamento de produtos, carrinho de compras e painel administrativo.',
        features: [
            'Sistema de autenticação completo',
            'Integração com gateway de pagamento',
            'Painel administrativo para gerenciar produtos',
            'Carrinho de compras persistente',
            'Sistema de avaliações e comentários',
        ],
        githubUrl: 'https://github.com/',
        liveUrl: 'https://youtube.com/',
        gallery: [a, b, c],
    },
    {
        id: 4,
        title: 'E-commerce Platform 4',
        description:
            'Plataforma completa de e-commerce com painel administrativo',
        image: placeholder,
        tags: ['React', 'MySQL'],
        detailedDescription:
            'Uma plataforma de e-commerce completa desenvolvida com React e Node.js, incluindo sistema de pagamentos, gerenciamento de produtos, carrinho de compras e painel administrativo.',
        features: [
            'Sistema de autenticação completo',
            'Integração com gateway de pagamento',
            'Painel administrativo para gerenciar produtos',
            'Carrinho de compras persistente',
            'Sistema de avaliações e comentários',
        ],
        githubUrl: 'https://github.com/',
        liveUrl: 'https://youtube.com/',
        gallery: [a, b, c],
    },
];

export default projects;
