import { OrderCard } from 'components/OrderCard';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { fetchGetAllOrdersAction } from 'store/actions/orderAction';
import { Button, Container, Page, Paragraph } from 'utils/styles';

export const OrdersPage = () => {
    const { orders, fetchActionStatus } = useAppSelector((store) => store.order);
    const [params, setParams] = useState({});
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchGetAllOrdersAction(params));
    }, [dispatch, fetchActionStatus, params]);

    const handleAll = () => {
        setParams({});
    };

    const handleDelivered = () => {
        setParams({ delivered: true });
    };

    const handleInDelivery = () => {
        setParams({ delivered: false, canceled: false });
    };

    const handleCanceled = () => {
        setParams({ canceled: true });
    };

    return (
        <Page alignItems='center' flexDirection='column' gap='12px'>
            {orders.length === 0 && !params ? (
                <Paragraph fontSize='18px'>no orders yet</Paragraph>
            ) : (
                <>
                    <Container gap='12px'>
                        <Button onClick={handleAll}>all</Button>
                        <Button onClick={handleDelivered}>delivered</Button>
                        <Button onClick={handleInDelivery}>in delivery</Button>
                        <Button onClick={handleCanceled}>canceled</Button>
                    </Container>
                    {orders.map((order) => (
                        <OrderCard key={order.id} {...order} />
                    ))}
                </>
            )}
        </Page>
    );
};
