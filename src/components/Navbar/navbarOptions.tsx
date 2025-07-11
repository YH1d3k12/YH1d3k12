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

const navbarOptions: MenuOption[] = [
    {
        title: 'Home',
        path: '/',
        icon: <IoHome />,
    },
    {
        title: 'About',
        path: '/',
        icon: <IoPersonSharp />,
    },
    {
        title: 'Projects',
        path: '/',
        icon: <IoImagesSharp />,
    },
    {
        title: 'Contact',
        path: '/',
        icon: <IoCallSharp />,
    },
];

export default navbarOptions;
