import { Project } from '../services/project';
import placeholder from '../assets/gallery/placeholder.svg';

const projects: Project[] = [
    {
        id: 1,
        title: 'E-commerce Platform',
        description:
            'Plataforma completa de e-commerce com painel administrativo',
        image: placeholder,
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
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
        gallery: [
            '/placeholder.svg?height=300&width=500',
            '/placeholder.svg?height=300&width=500',
            '/placeholder.svg?height=300&width=500',
        ],
    },
];

export default projects;
