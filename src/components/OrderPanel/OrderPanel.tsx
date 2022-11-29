import { OrderPanelProps } from './OrderPanel.types';
import React from 'react';
import { THEME } from 'utils/constants';
import { Container, Button } from 'utils/styles';

export const OrderPanel: React.FC<OrderPanelProps> = ({
    handleAll,
    handleCanceled,
    handleDelivered,
    handleInDelivery,
    current,
}) => {
    return (
        <Container gap='12px'>
            <Button
                padding='4px 10px'
                fontSize='14px'
                onClick={handleAll}
                backgroundColor={current === 'all' ? THEME.blue : THEME.gray}
            >
                all
            </Button>
            <Button
                padding='4px 10px'
                fontSize='14px'
                onClick={handleDelivered}
                backgroundColor={current === 'delivered' ? THEME.blue : THEME.gray}
            >
                delivered
            </Button>
            <Button
                padding='4px 10px'
                fontSize='14px'
                onClick={handleInDelivery}
                backgroundColor={current === 'in delivery' ? THEME.blue : THEME.gray}
            >
                in delivery
            </Button>
            <Button
                padding='4px 10px'
                fontSize='14px'
                onClick={handleCanceled}
                backgroundColor={current === 'canceled' ? THEME.blue : THEME.gray}
            >
                canceled
            </Button>
        </Container>
    );
};
