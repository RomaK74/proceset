import React, {useEffect, useState} from 'react';
import {Process} from '../../components/Process/Process';
import './Processes.scss';
import {useQuery} from '@apollo/client';
import {GET_PROCESS_LIST} from '../../query/processList';

export const Processes = () => {
    const [processList, setProcessList] = useState([]);
    const {data, error, loading} = useQuery(GET_PROCESS_LIST);

    useEffect(() => {
        if (!loading) {
            setProcessList([...data.processList]);
        }
    }, [data]);

    return (
        <div className="processes">
            {processList.length !== 0 && processList.map(item => (
                <Process key={item.id} {...item}/>
            ))}
            {error && "Ошибка получения данных"}
        </div>
    );
}