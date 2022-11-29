import { ManagerUserPageProps } from './ManagerUserPage.types';
import { ManagerOrderCard } from 'components/ManagerOrderCard';
import { ManagerOrderPanel } from 'components/ManagerOrderPanel';
import { Navigation } from 'components/Navigation';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetAllOrdersManagerAction } from 'store/actions/orderAction';
import { changeUserPageOrder } from 'store/reducers/orderReducer';
import { Container } from 'utils/styles';

export const ManagerUserPage: React.FC<ManagerUserPageProps> = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { userPage, orders, fetchActionStatus, count, limit, params } = useAppSelector((store) => store.order);

    const handlePage = (page: number) => {
        dispatch(changeUserPageOrder(page));
    };

    useEffect(() => {
        const values = { userId: +id!, page: userPage, ...params };
        dispatch(fetchGetAllOrdersManagerAction(values));
    }, [dispatch, id, params, userPage, fetchActionStatus]);

    return (
        <Container
            flexDirection='column'
            padding='12px'
            justifyContent='center'
            alignItems='center'
            gap='12px'
            width='80vw'
        >
            <ManagerOrderPanel />
            {orders.length !== 0 && orders.map((order) => <ManagerOrderCard key={order.id} order={order} />)}
            <Navigation count={count} limit={limit} page={userPage} handlePage={handlePage} />
        </Container>
    );
};
