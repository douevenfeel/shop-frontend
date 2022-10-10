import { useAppDispatch } from 'hooks/redux';
import React from 'react';
import {
    fetchChangeCountBasketAction,
    fetchChangeSelectedBasketAction,
    fetchDeleteDeviceBasketAction,
} from 'store/actions/basketAction';
import { Button, Container, Paragraph } from 'utils/styles';

import { DeviceCardBasketProps } from './DeviceCardBasket.types';

export const DeviceCardBasket: React.FC<DeviceCardBasketProps> = ({ id, count, selected, device }) => {
    const dispatch = useAppDispatch();

    const changeCount = (count: number) => {
        dispatch(fetchChangeCountBasketAction({ deviceId: device.id, count }));
    };

    const changeSelected = () => {
        dispatch(fetchChangeSelectedBasketAction({ deviceId: device.id, selected: !selected }));
    };

    const handleDelete = () => {
        dispatch(fetchDeleteDeviceBasketAction(device.id));
    };
    return (
        <Container margin='20px' alignItems='flex-start' flexDirection='column' gap='4px'>
            <Paragraph>count: {count}</Paragraph>
            <Button onClick={() => changeCount(count + 1)}>increment</Button>
            <Button onClick={() => changeCount(count - 1)}>decrement</Button>
            <Paragraph>selected: {String(selected)}</Paragraph>
            <Button onClick={changeSelected}>change selected</Button>
            <Paragraph>device id: {device.id}</Paragraph>
            <Button onClick={handleDelete}>delete</Button>
        </Container>
    );
};
