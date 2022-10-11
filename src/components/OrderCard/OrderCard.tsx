import { useAppDispatch } from 'hooks/redux';
import React from 'react';
import { fetchCancelOrderAction, fetchHideOrderAction } from 'store/actions/orderAction';
import { THEME } from 'utils/constants';
import { Button, Container, Paragraph } from 'utils/styles';
import { OrderCardStyled } from './OrderCard.style';

import { OrderCardProps } from './OrderCard.types';

export const OrderCard: React.FC<OrderCardProps> = ({ canceled, delivered, deliveryDate, id, orderDate }) => {
    const dispatch = useAppDispatch();
    const handleCancel = () => {
        dispatch(fetchCancelOrderAction(id));
    };

    const handleHide = () => {
        dispatch(fetchHideOrderAction(id));
    };

    return (
        <OrderCardStyled>
            <Paragraph>Order number: {id}</Paragraph>
            <Paragraph>Order date: {Date.parse(orderDate)}</Paragraph>
            <Paragraph>Delivery date: {Date.parse(deliveryDate)}</Paragraph>
            <Paragraph>Status: {(canceled && 'canceled') || (delivered && 'delivered') || 'in delivery'}</Paragraph>
            <Container gap='8px'>
                {!canceled && !delivered && (
                    <Button backgroundColor={THEME.red} onClick={handleCancel}>
                        cancel
                    </Button>
                )}
                <Button backgroundColor={THEME.lighterGray} onClick={handleHide}>
                    hide
                </Button>
            </Container>
        </OrderCardStyled>
    );
};
