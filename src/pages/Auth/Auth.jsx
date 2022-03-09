import React, {useEffect, useState} from 'react'
import Logo from '../../images/Proceset.svg';
import {useLocation, useNavigate} from 'react-router-dom';
import {Outlet} from 'react-router';
import {Error} from '../../components/Forms/Elements/Error/Error';
import './Auth.scss';

export const AuthForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');
    const auth = localStorage.getItem('token');

    useEffect(() => {
        if (auth) {
            navigate('/main/user');
        } else {
            if (location.pathname === '/')
                navigate('/login');
        }
    }, []);

    return (
        <div className="auth">
            <div className="logo"><img src={Logo} alt="Proceset"/></div>
            <div className="form">
                <Outlet context={[error, setError]}/>
                {error && <Error error={error}/>}
            </div>
        </div>
    );
}