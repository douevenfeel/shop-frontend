import { ManagerOrdersPageProps } from './ManagerOrdersPage.types';
import { ManagerOrderPanel } from 'components/ManagerOrderPanel';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { fetchGetAllOrdersManagerAction } from 'store/actions/orderAction';
import { Container } from 'utils/styles';

export const ManagerOrdersPage: React.FC<ManagerOrdersPageProps> = () => {
    const dispatch = useAppDispatch();
    const { orders, page, userId, dateFrom, dateTo } = useAppSelector((store) => store.order);
    useEffect(() => {
        const values: any = { page };
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
    }, [dateFrom, dateTo, dispatch, page, userId]);

    return (
        <Container flexDirection='column' padding='12px' justifyContent='center' alignItems='center' gap='12px'>
            <ManagerOrderPanel />
            {orders.map((order) => (
                <p>{order.id}</p>
            ))}
        </Container>
    );
};
