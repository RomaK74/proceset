import {Field} from './Field';
import React from 'react';

export const Password = ({label, placeholder, setError, validate}) =>
    <Field name="password"
           type="password"
           placeholder={placeholder || "Пароль"}
           label={label || ""}
           onFocus={() => setError('')}
           validate={validate}
    />
