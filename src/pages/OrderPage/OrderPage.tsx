import { DeviceCardOrder } from 'components/DeviceCardOrder';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchCancelOrderAction, fetchGetOneOrderAction, fetchHideOrderAction } from 'store/actions/orderAction';
import { resetOrder } from 'store/reducers/orderReducer';
import { THEME } from 'utils/constants';
import { Button, Container, Page, Paragraph } from 'utils/styles';
import { OrderPageStyled } from './OrderPage.style';

export const OrderPage = () => {
    const { order, loading } = useAppSelector((store) => store.order);
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const id = +pathname.split('/')[2];
        dispatch(fetchGetOneOrderAction(id));

        return () => {
            dispatch(resetOrder());
        };
    }, [dispatch, pathname]);

    useEffect(() => {
        setTimeout(() => !order && navigate('/orders'), 200);
    }, [order, navigate]);

    const handleHide = () => {
        dispatch(fetchHideOrderAction(order.id));
    };

    const handleCancel = () => {
        dispatch(fetchCancelOrderAction(order.id));
        navigate('/orders');
    };
    return (
        <Page justifyContent='center' alignItems='center'>
            {loading ? (
                <Paragraph>Loading...</Paragraph>
            ) : (
                <OrderPageStyled>
                    <Paragraph>Order number: {order.id}</Paragraph>
                    <Paragraph>Order date: {dayjs(order.orderDate).format(' DD/MM/YYYY HH:mm')}</Paragraph>
                    {!order.canceled && (
                        <Paragraph>Delivery date: {dayjs(order.deliveryDate).format(' DD/MM/YYYY HH:mm')}</Paragraph>
                    )}
                    <Paragraph>
                        Status: {(order.canceled && 'canceled') || (order.delivered && 'delivered') || 'in delivery'}
                    </Paragraph>
                    <Container justifyContent='center' alignItems='flex-start' gap='4px' margin='0 0 8px'>
                        {order.orderDevices?.map((orderDevice) => (
                            <DeviceCardOrder {...orderDevice} />
                        ))}
                    </Container>
                    {order.delivered && (
                        <Button backgroundColor={THEME.lighterGray} onClick={handleHide}>
                            hide
                        </Button>
                    )}
                    {!order.canceled && !order.delivered && (
                        <Button backgroundColor={THEME.red} onClick={handleCancel}>
                            cancel
                        </Button>
                    )}
                </OrderPageStyled>
            )}
        </Page>
    );
};
