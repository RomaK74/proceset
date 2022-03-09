import React, {useEffect, useState} from 'react';
import Menu from '../../images/Menu.png';
import './Main.scss';
import {Navigation} from '../../components/Navigation/Navigation';
import {useLocation, useNavigate} from 'react-router-dom';
import {Outlet} from 'react-router';

export const Main = () => {
    const [isMenu, setIsMenu] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/main')
            navigate('/main/user')
    });

    return (
        <div className="main__wrapper">
            {isMenu && <Navigation setIsMenu={setIsMenu}/>}
            <div className="header">
                <div className="header__container" onClick={() => setIsMenu(true)}>
                    <span className="header__menu"><img src={Menu} alt="Menu"/> <span>Меню</span></span>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}