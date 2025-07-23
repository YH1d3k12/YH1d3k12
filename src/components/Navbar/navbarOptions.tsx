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
        title: 'About',
        path: 'about',
        icon: <IoPersonSharp />,
    },
    {
        title: 'Projects',
        path: 'project',
        icon: <IoImagesSharp />,
    },
    {
        title: 'Contact',
        path: 'contact',
        icon: <IoCallSharp />,
    },
];

export default navbarOptions;
