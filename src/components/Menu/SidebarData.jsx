import { FiHome, FiPackage, FiClipboard, FiList, FiUser } from 'react-icons/fi';

export const SidebarData = [
    {
        title: 'Início',
        icon: <FiHome></FiHome>,
        link: '/',
    },
    {
        title: 'Produtos',
        icon: <FiPackage></FiPackage>,
        link: '/products',
    },
    {
        title: 'Perfil',
        icon: <FiUser></FiUser>,
        link: '/profile',
    },
];
