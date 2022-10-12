import { DeviceCardOrder } from 'components/DeviceCardOrder';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchRefreshAction } from 'store/actions/authAction';
import { fetchCancelOrderAction, fetchGetOneOrderAction, fetchHideOrderAction } from 'store/actions/orderAction';
import { resetOrder } from 'store/reducers/orderReducer';
import { THEME } from 'utils/constants';
import { Button, Container, Page, Paragraph } from 'utils/styles';
import { OrderPageStyled } from './OrderPage.style';

export const OrderPage = () => {
    const { order, loading } = useAppSelector((store) => store.order);
    const { authorized } = useAppSelector((store) => store.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            !authorized && dispatch(fetchRefreshAction());
        } else {
            !authorized && navigate('/shop');
        }
    }, [authorized, dispatch, navigate]);

    useEffect(() => {
        id && dispatch(fetchGetOneOrderAction({ id: +id }));

        return () => {
            dispatch(resetOrder());
        };
    }, [dispatch, id]);

    useEffect(() => {
        setTimeout(() => !order && navigate('/orders'), 200);
    }, [order, navigate]);

    const handleHide = () => {
        dispatch(fetchHideOrderAction({ id: order.id }));
    };

    const handleCancel = () => {
        dispatch(fetchCancelOrderAction({ id: order.id }));
        navigate('/orders');
    };
    return (
        <Page justifyContent='center' alignItems='center'>
            {!loading && (
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
                    <Container justifyContent='center' alignItems='flex-start' gap='4px' margin='0 0 8px'>
                        {order.orderDevices?.map((orderDevice) => (
                            <DeviceCardOrder key={orderDevice.id} {...orderDevice} />
                        ))}
                    </Container>
                    {(order.delivered || order.canceled) && (
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
