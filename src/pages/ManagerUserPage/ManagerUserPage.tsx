import { ManagerUserPageProps } from './ManagerUserPage.types';
import { ManagerOrderCard } from 'components/ManagerOrderCard';
import { Navigation } from 'components/Navigation';
import { OrderPanel } from 'components/OrderPanel';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetAllOrdersManagerAction } from 'store/actions/orderAction';
import { changeUserPageOrder } from 'store/reducers/orderReducer';
import { Container, Paragraph } from 'utils/styles';

type CurrentType = 'all' | 'delivered' | 'in delivery' | 'canceled';

export const ManagerUserPage: React.FC<ManagerUserPageProps> = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { userPage, orders, fetchActionStatus, count, limit } = useAppSelector((store) => store.order);

    const [params, setParams] = useState({});
    const [current, setCurrent] = useState<CurrentType>('all');

    const handlePage = (page: number) => {
        dispatch(changeUserPageOrder(page));
    };

    const handleAll = () => {
        setParams({});
        setCurrent('all');
    };

    const handleDelivered = () => {
        setParams({ delivered: true });
        setCurrent('delivered');
    };

    const handleInDelivery = () => {
        setParams({ delivered: false, canceled: false });
        setCurrent('in delivery');
    };

    const handleCanceled = () => {
        setParams({ canceled: true });
        setCurrent('canceled');
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
            <OrderPanel
                handleAll={handleAll}
                handleCanceled={handleCanceled}
                handleDelivered={handleDelivered}
                handleInDelivery={handleInDelivery}
                current={current}
            />
            {orders.length !== 0 ? (
                orders.map((order) => <ManagerOrderCard key={order.id} order={order} />)
            ) : (
                <Paragraph>user don't have {current} orders</Paragraph>
            )}
            <Navigation count={count} limit={limit} page={userPage} handlePage={handlePage} />
        </Container>
    );
};
