import { Container } from './styles';

import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { SidebarData } from './SidebarData';

import {
    FiArrowRightCircle,
    FiArrowLeftCircle,
    FiLogOut,
} from 'react-icons/fi';

export function Menu() {
    const { signOut } = useAuth();
    const [menuCollapse, setMenuCollapse] = useState(false);

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <Container>
            <ul className={menuCollapse ? 'sidebar closed' : 'sidebar'}>
                <div>
                    <p className="logo">
                        {menuCollapse ? 'Logo' : 'Logo Completa'}
                    </p>
                    <div className="separator">
                        <div className="collapse" onClick={menuIconClick}>
                            {menuCollapse ? (
                                <FiArrowRightCircle></FiArrowRightCircle>
                            ) : (
                                <FiArrowLeftCircle></FiArrowLeftCircle>
                            )}
                        </div>
                    </div>
                    <div className="sidebarList">
                        {SidebarData.map((val, key) => {
                            return (
                                <li
                                    key={key}
                                    className="row"
                                    id={
                                        window.location.pathname == val.link
                                            ? 'active'
                                            : ''
                                    }
                                    onClick={() => {
                                        window.location.pathname = val.link;
                                    }}
                                >
                                    <div className="icon">{val.icon}</div>{' '}
                                    <div className="title">
                                        {menuCollapse ? '' : val.title}
                                    </div>
                                </li>
                            );
                        })}
                    </div>
                </div>
                <li className="logout" onClick={signOut}>
                    {<FiLogOut></FiLogOut>} {menuCollapse ? '' : ' Sair'}
                </li>
            </ul>
        </Container>
    );
}
