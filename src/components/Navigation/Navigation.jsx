import React from 'react';
import Menu from '../../images/Menu_white.svg';
import Name from '../../images/name.svg';
import User from '../../images/User.svg';
import List from '../../images/List.svg';
import './Navigation.scss';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getUser} from '../../redux/reducers/selectors';

export const Navigation = ({setIsMenu}) => {
    const {firstName} = useSelector(getUser);
    return (
        <div className="drawer">
            <nav className="menu">
                <div className="menu__logo"
                     onClick={() => setIsMenu(false)}
                >
                    <img src={Menu} alt="Menu"/><img src={Name} alt="proceset"/>
                </div>
                <div className="menu__item">
                    <Link to="user" onClick={() => setIsMenu(false)}>
                        <img src={User} alt="Menu"/> {firstName || 'Username'}
                    </Link>
                </div>
                <div className="menu__item">
                    <Link to="processes" onClick={() => setIsMenu(false)}>
                        <img src={List} alt="Menu"/> Список процессов
                    </Link>
                </div>
            </nav>
            <div className="overlay" onClick={() => setIsMenu(false)}/>
        </div>
    );
}