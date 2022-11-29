import { ManagerOrdersPageProps } from './ManagerOrdersPage.types';
import { ManagerOrderCard } from 'components/ManagerOrderCard';
import { ManagerOrderPanel } from 'components/ManagerOrderPanel';
import { Navigation } from 'components/Navigation';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { fetchGetAllOrdersManagerAction } from 'store/actions/orderAction';
import { changePageOrder } from 'store/reducers/orderReducer';
import { Container } from 'utils/styles';

export const ManagerOrdersPage: React.FC<ManagerOrdersPageProps> = () => {
    const dispatch = useAppDispatch();
    const { orders, page, count, limit, userId, dateFrom, dateTo, fetchActionStatus, params } = useAppSelector(
        (store) => store.order,
    );
    useEffect(() => {
        const values: { [key: string]: number | string; page: number } = { page, ...params };
        if (userId !== 0) {
            values.userId = userId;
        }
        if (dateFrom !== '') {
            values.dateFrom = dateFrom;
        }
        if (dateTo !== '') {
            values.dateTo = dateTo;
        }
        dispatch(fetchGetAllOrdersManagerAction(values));
    }, [dateFrom, dateTo, dispatch, page, userId, fetchActionStatus, params]);

    const handlePage = (page: number) => {
        dispatch(changePageOrder(page));
    };

    return (
        <Container
            flexDirection='column'
            padding='12px'
            justifyContent='center'
            alignItems='center'
            gap='12px'
            width='80vw'
        >
            <ManagerOrderPanel />
            {orders.map((order) => (
                <ManagerOrderCard key={order.id} order={order} />
            ))}
            <Navigation count={count} limit={limit} page={page} handlePage={handlePage} />
        </Container>
    );
};
