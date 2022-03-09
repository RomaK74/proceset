import React, {useState} from 'react';
import {useField} from 'react-final-form';
import eyeOpen from '../../../images/eyeOpen.svg';
import eyeClose from '../../../images/eyeClose.svg';
import './Field.scss';

export function Field(props) {
    const [type, setType] = useState('password');

    const {
        input,
        meta: {error, touched, submitError}
    } = useField(props.name, {
        initialValue: props.initialValue,
        validate: props.validate
    });

    const inputProps = {
        ...props,
        error: touched && error && true,
        ...input
    };

    const onClickEye = () => {
        type === "password" ? setType("text") : setType("password");
    }

    return (
        <div>
            <div className="field">
                {props.label && <label className="field__label">{props.label}</label>}
                <div className="field__right">
                    <input className={'field__input' + (touched && error ? ' red' : '')}
                           {...inputProps}
                           type={props.type === "password" ? type : props.type}
                           onFocus={props.onFocus}/>
                    {(props.name === "password" || props.name === "confirm") &&
                    <img className="field__eye" onClick={onClickEye}
                         src={type === "password" ? eyeClose : eyeOpen} alt="show/hide"/>}
                    <div className="field__error">{touched && (error || submitError) ? error : ""}</div>
                </div>
            </div>
        </div>
    );
}