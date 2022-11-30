import { OrderCardStyled } from './OrderCard.style';
import { OrderCardProps } from './OrderCard.types';
import dayjs from 'dayjs';
import { useAppDispatch } from 'hooks/redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCancelOrderAction, fetchHideOrderAction } from 'store/actions/orderAction';
import { THEME } from 'utils/constants';
import { Button, Container, Paragraph } from 'utils/styles';

export const OrderCard: React.FC<OrderCardProps> = ({ canceled, delivered, deliveryDate, id, orderDate }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleCancel = () => {
        dispatch(fetchCancelOrderAction({ id }));
    };

    const handleHide = () => {
        dispatch(fetchHideOrderAction({ id }));
    };

    const handleShow = () => {
        navigate(`/order/${id}`);
    };

    return (
        <OrderCardStyled>
            <Paragraph>
                <strong>Order number: </strong>
                {id}
            </Paragraph>
            <Paragraph>
                <strong>Order date: </strong>
                {dayjs(orderDate).format('DD.MM.YYYY HH:mm')}
            </Paragraph>
            <Paragraph>
                <strong>Delivery date: </strong>
                {dayjs(deliveryDate).format('DD.MM.YYYY HH:mm')}
            </Paragraph>
            <Paragraph>
                <strong>Status: </strong>
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
            </Paragraph>
            <Container gap='8px'>
                <Button backgroundColor={THEME.green} onClick={handleShow}>
                    show details
                </Button>
                {(delivered || canceled) && (
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
