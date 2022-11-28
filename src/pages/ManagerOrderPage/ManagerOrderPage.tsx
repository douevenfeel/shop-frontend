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

    return (
        <Container justifyContent='center' alignItems='center' width='80vw' padding='20px' height='auto'>
            <OrderPageStyled>
                <Paragraph>Order number: {order.id}</Paragraph>
                <Paragraph>Order date: {dayjs(order.orderDate).format(' DD/MM/YYYY HH:mm')}</Paragraph>
                {!order.canceled && (
                    <Paragraph>Delivery date: {dayjs(order.deliveryDate).format(' DD/MM/YYYY HH:mm')}</Paragraph>
                )}
                <Paragraph>
                    Status:{' '}
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
