import { ManagerOrderPageProps } from './ManagerOrderPage.types';
import { DeviceCardOrder } from 'components/DeviceCardOrder';
import dayjs from 'dayjs';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { OrderPageStyled } from 'pages/OrderPage/OrderPage.style';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchGetOneOrderAction, fetchDeliveryStatusOrderManagerAction } from 'store/actions/orderAction';
import { resetOrder } from 'store/reducers/orderReducer';
import { THEME } from 'utils/constants';
import { Paragraph, Container, Button } from 'utils/styles';

export const ManagerOrderPage: React.FC<ManagerOrderPageProps> = () => {
    const { order, fetchActionStatus } = useAppSelector((store) => store.order);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        id && dispatch(fetchGetOneOrderAction({ id: +id }));

        return () => {
            dispatch(resetOrder());
        };
    }, [dispatch, id, fetchActionStatus]);

    useEffect(() => {
        setTimeout(() => !order && navigate('/orders'), 200);
    }, [order, navigate]);

    const handelInDelivery = () => {
        const values = { id: order.id, status: 'in delivery' };
        dispatch(fetchDeliveryStatusOrderManagerAction(values));
    };

    const handelDelivery = () => {
        const values = { id: order.id, status: 'delivered' };
        dispatch(fetchDeliveryStatusOrderManagerAction(values));
    };

    const handleCancel = () => {
        const values = { id: order.id, status: 'canceled' };
        dispatch(fetchDeliveryStatusOrderManagerAction(values));
    };

    console.log(order);

    return (
        <Container justifyContent='center' alignItems='center' width='80vw' padding='20px' height='auto'>
            <OrderPageStyled>
                {!!order.user && (
                    <>
                        <Paragraph>
                            <strong>User's id: </strong>
                            {order.user.id}
                        </Paragraph>
                        <Paragraph>
                            <strong>User's email: </strong>
                            {order.user.email}
                        </Paragraph>
                        <Paragraph>
                            <strong>User's first name: </strong>
                            {order.user.firstName}
                        </Paragraph>
                        <Paragraph>
                            <strong>User's last name: </strong>
                            {order.user.lastName}
                        </Paragraph>
                        <Paragraph>
                            <strong>User's role: </strong>
                            {order.user.role}
                        </Paragraph>
                    </>
                )}
                <Paragraph>
                    <strong>Order number: </strong>
                    {order.id}
                </Paragraph>
                <Paragraph>
                    <strong>Order date: </strong>
                    {dayjs(order.orderDate).format(' DD/MM/YYYY HH:mm')}
                </Paragraph>
                {!order.canceled && (
                    <Paragraph>
                        <strong>Delivery date: </strong>
                        {dayjs(order.deliveryDate).format(' DD/MM/YYYY HH:mm')}
                    </Paragraph>
                )}
                <Paragraph>
                    <strong>Status: </strong>
                    {order.canceled ? (
                        <Paragraph as='span' color={THEME.red}>
                            canceled
                        </Paragraph>
                    ) : order.delivered ? (
                        <Paragraph as='span' color={THEME.green}>
                            delivered
                        </Paragraph>
                    ) : (
                        <Paragraph as='span' color={THEME.blue}>
                            in delivery
                        </Paragraph>
                    )}
                </Paragraph>
                <Container justifyContent='center' alignItems='center' gap='4px' margin='0 0 8px' width='100%'>
                    {order.orderDevices?.map((orderDevice) => (
                        <DeviceCardOrder key={orderDevice.id} {...orderDevice} />
                    ))}
                </Container>
                <Container gap='8px'>
                    <Button backgroundColor={THEME.green} onClick={handelDelivery}>
                        delivery
                    </Button>
                    <Button backgroundColor={THEME.blue} onClick={handelInDelivery}>
                        in delivery
                    </Button>
                    <Button backgroundColor={THEME.red} onClick={handleCancel}>
                        cancel
                    </Button>
                </Container>
            </OrderPageStyled>
        </Container>
    );
};
