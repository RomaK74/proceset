import React from 'react';
import './Button.scss';

export const Button = ({submitting, error, text, errorsForm, pristine}) =>
    <button className="form__button" disabled={submitting || pristine || error || errorsForm}>{text}</button>