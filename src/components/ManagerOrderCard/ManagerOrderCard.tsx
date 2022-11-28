import { ManagerOrderCardStyled } from './ManagerOrderCard.style';
import { ManagerOrderCardProps } from './ManagerOrderCard.types';
import dayjs from 'dayjs';
import { useAppDispatch } from 'hooks/redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDeliveryStatusOrderManagerAction } from 'store/actions/orderAction';
import { THEME } from 'utils/constants';
import { Paragraph, Container, Button } from 'utils/styles';

export const ManagerOrderCard: React.FC<ManagerOrderCardProps> = ({ order }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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

    const handleShow = () => {
        navigate(`/manager/order/${order.id}`);
    };
    return (
        <ManagerOrderCardStyled>
            <Paragraph>Order number: {order.id}</Paragraph>
            <Paragraph>Order date: {dayjs(order.orderDate).format(' DD/MM/YYYY HH:mm')}</Paragraph>
            <Paragraph>Delivery date: {dayjs(order.deliveryDate).format(' DD/MM/YYYY HH:mm')}</Paragraph>
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
            <Container gap='8px'>
                <Button backgroundColor={THEME.blue} onClick={handleShow}>
                    show details
                </Button>
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
            </Container>
        </ManagerOrderCardStyled>
    );
};
