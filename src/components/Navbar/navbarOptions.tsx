import { JSX } from 'react';
import { IoImagesSharp, IoPersonSharp, IoCallSharp } from 'react-icons/io5';

export interface MenuOption {
    title: string;
    icon: JSX.Element;
    path: string;
}

const navbarOptions: MenuOption[] = [
    {
        title: 'navbar.about',
        path: 'about',
        icon: <IoPersonSharp />,
    },
    {
        title: 'navbar.projects',
        path: 'project',
        icon: <IoImagesSharp />,
    },
    {
        title: 'navbar.contact',
        path: 'contact',
        icon: <IoCallSharp />,
    },
];

export default navbarOptions;
