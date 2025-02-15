import { JSX } from 'react';
import {
    IoHome,
    IoImagesSharp,
    IoPersonSharp,
    IoCallSharp,
} from 'react-icons/io5';

export interface MenuOption {
    title: string;
    icon: JSX.Element;
    path: string;
}

const pathOptions: MenuOption[] = [
    {
        title: 'Home',
        path: '/home',
        icon: <IoHome />,
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <IoImagesSharp />,
    },
    {
        title: 'About',
        path: '/about',
        icon: <IoPersonSharp />,
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoCallSharp />,
    },
];

export default pathOptions;
