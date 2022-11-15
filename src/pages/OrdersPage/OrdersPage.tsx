import { OrdersContainer } from './OrdersPage.style';
import { Navigation } from 'components/Navigation';
import { OrderCard } from 'components/OrderCard';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRefreshAction } from 'store/actions/authAction';
import { fetchGetAllOrdersAction } from 'store/actions/orderAction';
import { changePageOrder } from 'store/reducers/orderReducer';
import { Page, Paragraph, Container, Button } from 'utils/styles';

export const OrdersPage = () => {
    const { orders, count, limit, page, fetchActionStatus } = useAppSelector((store) => store.order);
    const { authorized } = useAppSelector((store) => store.user);
    const [params, setParams] = useState({});
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handlePage = (page: number) => {
        dispatch(changePageOrder(page));
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            !authorized && dispatch(fetchRefreshAction());
        } else {
            !authorized && navigate(-1);
        }
    }, [authorized, dispatch, navigate]);

    useEffect(() => {
        dispatch(fetchGetAllOrdersAction({ page, ...params }));
    }, [dispatch, fetchActionStatus, page, params]);

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
            {orders.length === 0 && !params ? (
                <>
                    <Paragraph fontSize='18px'>no orders yet</Paragraph>
                </>
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
                    <Navigation count={count} limit={limit} page={page} handlePage={handlePage} />{' '}
                </Container>
            )}
        </Page>
    );
};
