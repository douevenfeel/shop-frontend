import { ManagerOrderCardStyled } from './ManagerOrderCard.style';
import { ManagerOrderCardProps } from './ManagerOrderCard.types';
import dayjs from 'dayjs';
import { useAppDispatch } from 'hooks/redux';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchDeliveryStatusOrderManagerAction } from 'store/actions/orderAction';
import { THEME } from 'utils/constants';
import { Paragraph, Container, Button } from 'utils/styles';

export const ManagerOrderCard: React.FC<ManagerOrderCardProps> = ({ order }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

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

    const handleUser = () => {
        navigate(`/manager/user/${order.user.id}`);
    };

    return (
        <ManagerOrderCardStyled>
            <Paragraph>
                <strong>Order number: </strong>
                {order.id}
            </Paragraph>
            <Paragraph>
                <strong>Order date: </strong>
                {dayjs(order.orderDate).format('DD.MM.YYYY HH:mm')}
            </Paragraph>
            {!order.canceled && (
                <Paragraph>
                    <strong>Delivery date: </strong>
                    {dayjs(order.deliveryDate).format('DD.MM.YYYY HH:mm')}
                </Paragraph>
            )}

            <Paragraph>
                <strong>Status: </strong>
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
            <Paragraph>
                <strong>User's id: </strong>
                {order.user.id}
            </Paragraph>
            <Paragraph>
                <strong>User's email: </strong>
                {order.user.email}
            </Paragraph>
            <Paragraph>
                <strong>User's first name: </strong>
                {order.user.firstName}
            </Paragraph>
            <Paragraph>
                <strong>User's last name: </strong>
                {order.user.lastName}
            </Paragraph>
            <Paragraph>
                <strong>User's role: </strong>
                {order.user.role}
            </Paragraph>
            <Container gap='8px'>
                <Button backgroundColor={THEME.blue} onClick={handleShow}>
                    show details
                </Button>
                {location.pathname.includes('orders') && (
                    <Button backgroundColor={THEME.blue} onClick={handleUser}>
                        all user orders
                    </Button>
                )}
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
