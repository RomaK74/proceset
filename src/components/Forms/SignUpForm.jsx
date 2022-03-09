import React, {useEffect} from 'react';
import {Form} from './Form';
import {Link, useNavigate, useOutletContext} from 'react-router-dom';
import {required, confirm} from '../../utils/validators';
import {useMutation} from '@apollo/client';
import {LOGIN} from '../../mutations/login';
import {SIGNUP} from '../../mutations/signup';
import {FirstName} from './Inputs/FirstName';
import {SecondName} from './Inputs/SecondName';
import {Email} from './Inputs/Email';
import {Password} from './Inputs/Password';
import {Confirm} from './Inputs/Confirm';
import {Button} from './Elements/Button/Button';

export const SignUpForm = () => {
    const [error, setError] = useOutletContext();
    const [login] = useMutation(LOGIN);
    const [signup] = useMutation(SIGNUP);
    const navigate = useNavigate();
    useEffect(() => {
        setError('');
    }, []);

    const onSubmit = async (values) => {
        await signup({
            variables: {
                firstName: values.firstName,
                secondName: values.secondName,
                email: values.email,
                password: values.password
            }
        });
        login({
            variables: {
                email: values.email,
                password: values.password
            }
        }).then(({data}) => {
            if (data.login.token) {
                navigate('/main/user', {replace: true});
                window.localStorage.setItem('token', data.login.token);
            }
        });
    }

    const validate = values => {
        const errors = {};
        if (!errors.confirm)
            errors.confirm = confirm(values.password, values.confirm);
        return errors;
    }

    return (
        <div className="form__wrapper">
            <h3>Регистрация</h3>
            <Form onSubmit={onSubmit} validate={validate}>
                {(props =>
                        <div>
                            <FirstName setError={setError}/>
                            <SecondName setError={setError}/>
                            <Email setError={setError} />
                            <Password setError={setError} validate={required}/>
                            <Confirm placeholder="Повторите пароль" validate={required} setError={setError}/>
                            <Button submitting={props.submitting} error={error ? error : undefined} text="Применить и войти"/>
                        </div>
                )}
            </Form>
            <div className="link">Уже зарегистрированы? <Link to="/login" >Вход</Link></div>
        </div>
    );
}