import {Field} from './Field';
import React from 'react';

export const Confirm = ({label, placeholder, setError, validate}) =>
    <Field name="confirm"
           type="password"
           placeholder={placeholder}
           label={"" || label}
           onFocus={() => setError(null) || null}
           validate={validate}
    />