import Attention from '../../../../images/Attention.png';
import React from 'react';
import './Error.scss';

export const Error = ({error}) => <div className="error"><img src={Attention} alt="Ошибка"/><div>{error}</div></div>
