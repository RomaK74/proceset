import {Field} from './Field';
import React from 'react';
import {required} from '../../../utils/validators';

export const SecondName = ({label, initialValue, setError}) =>
    <Field name="secondName"
           placeholder="Фамилия"
           label={label || ""}
           type="text"
           initialValue={initialValue || ""}
           validate={required}
           onFocus={() => setError(null) || null}
    />