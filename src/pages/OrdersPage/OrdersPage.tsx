import { Navigation } from 'components/Navigation';
import { OrderCard } from 'components/OrderCard';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRefreshAction } from 'store/actions/authAction';
import { fetchGetAllOrdersAction } from 'store/actions/orderAction';
import { Button, Container, Page, Paragraph } from 'utils/styles';
import { OrdersContainer } from './OrdersPage.style';

export const OrdersPage = () => {
    const { orders, fetchActionStatus, loading } = useAppSelector((store) => store.order);
    const { authorized } = useAppSelector((store) => store.user);
    const [params, setParams] = useState({});
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            !authorized && dispatch(fetchRefreshAction());
        } else {
            !authorized && navigate('/shop');
        }
    }, [authorized, dispatch, navigate]);

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
        <Page alignItems='center' flexDirection='column'>
            {!loading &&
                (orders.length === 0 && !params ? (
                    <Paragraph fontSize='18px'>no orders yet</Paragraph>
                ) : (
                    <Container width='calc(100vw - 40px)' maxWidth='768px' justifyContent='center' gap='12px'>
                        <Container gap='12px'>
                            <Button padding='4px 10px' fontSize='14px' onClick={handleAll}>
                                all
                            </Button>
                            <Button padding='4px 10px' fontSize='14px' onClick={handleDelivered}>
                                delivered
                            </Button>
                            <Button padding='4px 10px' fontSize='14px' onClick={handleInDelivery}>
                                in delivery
                            </Button>
                            <Button padding='4px 10px' fontSize='14px' onClick={handleCanceled}>
                                canceled
                            </Button>
                        </Container>
                        <OrdersContainer>
                            {orders.map((order) => (
                                <OrderCard key={order.id} {...order} />
                            ))}
                        </OrdersContainer>
                        <Navigation></Navigation>
                    </Container>
                ))}
        </Page>
    );
};
