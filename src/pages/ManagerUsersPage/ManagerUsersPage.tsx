import { ManagerUsersPageProps } from './ManagerUsersPage.types';
import { ManagerUserCard } from 'components/ManagerUserCard';
import { ManagerUserPanel } from 'components/ManagerUserPanel';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { fetchGetAllUsersAction } from 'store/actions/userAction';
import { Container } from 'utils/styles';

export const ManagerUsersPage: React.FC<ManagerUsersPageProps> = () => {
    const dispatch = useAppDispatch();
    const { users, page, searchValue, searchBy } = useAppSelector((store) => store.user);

    useEffect(() => {
        const values = { page, searchValue, searchBy };
        dispatch(fetchGetAllUsersAction(values));
    }, [dispatch, page, searchBy, searchValue]);

    return (
        <Container flexDirection='column' padding='12px' justifyContent='center' alignItems='center' gap='12px'>
            <ManagerUserPanel />
            {users && users.map((user) => <ManagerUserCard key={user.id} user={user} />)}
        </Container>
    );
};
