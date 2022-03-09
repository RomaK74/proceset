export const required = value =>
     value ? undefined : 'Произошла ошибка. Поле должно быть заполнено';

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export const isEmail = email => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email))
            return undefined;
        else return 'Произошла ошибка';
}

export const confirm = (password1, password2) => {
    if (password1 !== password2)
        return 'Произошла ошибка'
    return undefined;
}