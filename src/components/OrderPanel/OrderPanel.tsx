import { OrderPanelProps } from './OrderPanel.types';
import React from 'react';
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
    );
};
