import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { fetchGetAllOrdersAction } from 'store/actions/orderAction';
import { Container, Page, Paragraph } from 'utils/styles';

export const OrdersPage = () => {
    const { orders } = useAppSelector((store) => store.order);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchGetAllOrdersAction());
    }, [dispatch]);

    return (
        <Page>
            <Container>
                {orders.length === 0 ? (
                    <Paragraph>no orders yet</Paragraph>
                ) : (
                    orders?.map((order) => <Paragraph key={order.id}>order id: {order.id}</Paragraph>)
                )}
            </Container>
        </Page>
    );
};
