import {Field} from './Field';
import React from 'react';
import {required} from '../../../utils/validators';

export const FirstName = ({label, initialValue, setError}) =>
    <Field name="firstName"
           placeholder="Имя"
           label={label || ""}
           type="text"
           initialValue={initialValue || ""}
           validate={required}
           onFocus={() => setError(null) || null}
    />