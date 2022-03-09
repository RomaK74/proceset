import {Form} from './Form';
import React, {useEffect} from 'react';
import {useMutation} from '@apollo/client';
import {LOGIN} from '../../mutations/login';
import {Link, useOutletContext} from 'react-router-dom';
import {required} from '../../utils/validators';
import {useNavigate} from 'react-router-dom';
import {Email} from './Inputs/Email';
import {Password} from './Inputs/Password';
import {Button} from './Elements/Button/Button';

export const LoginForm = () => {
    const [error, setError] = useOutletContext();
    const navigate = useNavigate();
    const [login] = useMutation(LOGIN);
    useEffect(() => {
        setError('');
    }, []);

    const onSubmit = async values => {
        login({
            variables: {
                email: values.email,
                password: values.password
            }
        }).then(({data}) => {
            if (data.login.token) {
                window.localStorage.setItem('token', data.login.token);
                navigate('/main/user', {replace: true});
            }
        }).catch(({graphQLErrors}) => {
            setError(graphQLErrors[0].message);
        });
    }

    return (
        <div className="form__wrapper">
            <Form onSubmit={onSubmit} >
                {props => (
                    <div>
                        <Email setError={setError}/>
                        <Password setError={setError} validate={required}/>
                        <Button submitting={props.submitting} error={error ? error : undefined} text="Войти в систему"/>
                    </div>
                )}
            </Form>
            <Link to="/signup">Зарегистрироваться</Link>
        </div>
    );
}

