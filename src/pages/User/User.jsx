import React, {useEffect} from 'react';
import './User.scss';
import {useMutation, useQuery} from '@apollo/client';
import {GET_CURRENT_USER} from '../../query/currentUser';
import {setUser} from '../../redux/actions/user';
import {getUser} from '../../redux/reducers/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {EDIT_USER} from '../../mutations/editUser';
import {UserForm} from '../../components/Forms/UserForm';

export const User = () => {
    const {data, error, loading} = useQuery(GET_CURRENT_USER);
    const [editDataUser] = useMutation(EDIT_USER);
    const dispatch = useDispatch();
    let user = useSelector(getUser);

    useEffect(() => {
        if (!user.email) {
            if (!loading) {
                dispatch(setUser(data.currentUser));
            }
        }
    }, [data]);

    return (
        <div className="content">
            {user && <UserForm editDataUser={editDataUser} user={user}/>}
            {error && "Ошибка получения данных"}
        </div>
    );
}