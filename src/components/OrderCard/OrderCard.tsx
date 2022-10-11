import { useAppDispatch } from 'hooks/redux';
import React from 'react';
import { fetchCancelOrderAction, fetchHideOrderAction } from 'store/actions/orderAction';
import { THEME } from 'utils/constants';
import { Button, Container, Paragraph } from 'utils/styles';
import { OrderCardStyled } from './OrderCard.style';
import dayjs from 'dayjs';

import { OrderCardProps } from './OrderCard.types';
import { useNavigate } from 'react-router-dom';

export const OrderCard: React.FC<OrderCardProps> = ({ canceled, delivered, deliveryDate, id, orderDate }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleCancel = () => {
        dispatch(fetchCancelOrderAction(id));
    };

    const handleHide = () => {
        dispatch(fetchHideOrderAction(id));
    };

    const handleShow = () => {
        navigate(`/order/${id}`);
    };

    return (
        <OrderCardStyled>
            <Paragraph>Order number: {id}</Paragraph>
            <Paragraph>Order date: {dayjs(orderDate).format(' DD/MM/YYYY HH:mm')}</Paragraph>
            <Paragraph>Delivery date: {dayjs(deliveryDate).format(' DD/MM/YYYY HH:mm')}</Paragraph>
            <Paragraph>
                Status:{' '}
                {canceled ? (
                    <Paragraph as='span' color={THEME.red}>
                        canceled
                    </Paragraph>
                ) : delivered ? (
                    <Paragraph as='span' color={THEME.green}>
                        delivered
                    </Paragraph>
                ) : (
                    <Paragraph as='span' color={THEME.blue}>
                        in delivery
                    </Paragraph>
                )}
                {/* <Paragraph as='span' color={THEME.red}>
                    {(canceled && 'canceled') || (delivered && 'delivered') || 'in delivery'}
                </Paragraph> */}
            </Paragraph>
            <Container gap='8px'>
                <Button backgroundColor={THEME.green} onClick={handleShow}>
                    show details
                </Button>
                {delivered && (
                    <Button backgroundColor={THEME.lighterGray} onClick={handleHide}>
                        hide
                    </Button>
                )}
                {!canceled && !delivered && (
                    <Button backgroundColor={THEME.red} onClick={handleCancel}>
                        cancel
                    </Button>
                )}
            </Container>
        </OrderCardStyled>
    );
};
