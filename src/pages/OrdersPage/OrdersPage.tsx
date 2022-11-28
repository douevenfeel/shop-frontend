import { OrdersContainer } from './OrdersPage.style';
import { Navigation } from 'components/Navigation';
import { OrderCard } from 'components/OrderCard';
import { OrderPanel } from 'components/OrderPanel';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { useState, useEffect } from 'react';
import { fetchGetAllOrdersAction } from 'store/actions/orderAction';
import { changePageOrder } from 'store/reducers/orderReducer';
import { Page, Paragraph, Container } from 'utils/styles';

type CurrentType = 'all' | 'delivered' | 'in delivery' | 'canceled';

export const OrdersPage = () => {
    const { orders, count, limit, page, fetchActionStatus } = useAppSelector((store) => store.order);
    const [params, setParams] = useState({});
    const dispatch = useAppDispatch();
    const [current, setCurrent] = useState<CurrentType>('all');

    const handlePage = (page: number) => {
        dispatch(changePageOrder(page));
    };

    useEffect(() => {
        const values = { page, ...params };
        dispatch(fetchGetAllOrdersAction(values));
    }, [dispatch, fetchActionStatus, page, params]);

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

    return (
        <Page alignItems='center' flexDirection='column'>
            {orders.length === 0 && !params ? (
                <>
                    <Paragraph fontSize='18px'>no orders yet</Paragraph>
                </>
            ) : (
                <Container width='calc(100vw - 40px)' maxWidth='768px' justifyContent='center' gap='12px'>
                    <OrderPanel
                        handleAll={handleAll}
                        handleCanceled={handleCanceled}
                        handleDelivered={handleDelivered}
                        handleInDelivery={handleInDelivery}
                        current={current}
                    />
                    <OrdersContainer>
                        {orders.length !== 0 ? (
                            orders.map((order) => <OrderCard key={order.id} {...order} />)
                        ) : (
                            <Paragraph>user don't have {current} orders</Paragraph>
                        )}
                    </OrdersContainer>
                    <Navigation count={count} limit={limit} page={page} handlePage={handlePage} />
                </Container>
            )}
        </Page>
    );
};
