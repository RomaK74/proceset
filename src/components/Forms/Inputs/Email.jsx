import {Field} from './Field';
import {composeValidators, isEmail, required} from '../../../utils/validators';
import React from 'react';

export const Email = ({label, initialValue, setError}) =>
    <Field name="email"
           placeholder="Электронная почта"
           label={label || ""}
           type="email"
           initialValue={initialValue || ""}
           validate={composeValidators(required, isEmail)}
           onFocus={() => setError(null) || null}
    />