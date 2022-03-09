import {confirm, required} from '../../utils/validators';
import {Form} from './Form';
import React, {useEffect, useState} from 'react';
import {setUser} from '../../redux/actions/user';
import {useDispatch} from 'react-redux';
import {FirstName} from './Inputs/FirstName';
import {SecondName} from './Inputs/SecondName';
import {Email} from './Inputs/Email';
import {Password} from './Inputs/Password';
import {Confirm} from './Inputs/Confirm';
import {Button} from './Elements/Button/Button';

export const UserForm = ({user, editDataUser}) => {
    const dispatch = useDispatch();
    useEffect(() => {

    }, []);
    const [buttonText, setButtonText] = useState("Сохранить");
    const [errorsForm, setErrorsForm] = useState('');
    const [errorsServer, setErrorsServer] = useState('');

    const validate = values => {
        const errors = {}
        if (values.password) {
            errors.confirm = required(values.confirm)
            if (!errors.confirm)
                errors.confirm = confirm(values.password, values.confirm);
        }
        if (errors.firstName || errors.secondName || errors.email || errors.password || errors.confirm) {
            setErrorsForm('Ошибка');
        } else
            setErrorsForm('');
        if (values.confirm && !values.password) {
            errors.password = required(values.password);
        }
        return errors;
    }

    const onSubmit = values => {
        const newDataUser = {};
        newDataUser.id = user.id;
        newDataUser.firstName = values.firstName;
        newDataUser.secondName = values.secondName;
        newDataUser.email = values.email;
        if (values.password)
            newDataUser.password = values.password;
        editDataUser({
            variables: {
                ...newDataUser
            }
        }).then(({data}) => {
                setButtonText("Сохранено");
                dispatch(setUser(data.editUser));
                setTimeout(() => setButtonText("Сохранить"), 3000)
            }
        ).catch(({graphQLErrors}) => {
            setErrorsServer(graphQLErrors.messages[0]);
            alert("Произошла ошибка: " + errorsServer);
        });
    }

    return (
        <Form onSubmit={onSubmit} validate={validate}>
            {props => (
                <div>
                    <div className="content__name">
                        <div className="name">
                            {user.firstName + " " + user.secondName}. Редактирование
                        </div>
                        <Button text={buttonText}
                                submitting={props.submitting}
                                pristine={props.pristine}
                                errorsForm={errorsForm}
                        />
                    </div>
                    <div className="form">
                        <div className="form__inputs">
                            <FirstName label="Имя" initialValue={user.firstName} setError={setErrorsServer}/>
                            <SecondName label="Фамилия" initialValue={user.secondName} setError={setErrorsServer}/>
                            <Email label="Электронная почта" initialValue={user.email} setError={setErrorsServer}/>
                            <Password label="Новый пароль"
                                      placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                      setError={setErrorsServer}/>
                            <Confirm label="Повторите пароль" placeholder="Не задано" setError={setErrorsServer}/>
                        </div>
                    </div>
                </div>)}
        </Form>
    );
}