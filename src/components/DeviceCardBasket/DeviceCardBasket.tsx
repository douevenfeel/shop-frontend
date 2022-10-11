import { useAppDispatch } from 'hooks/redux';
import React from 'react';
import {
    fetchChangeCountBasketAction,
    fetchChangeSelectedBasketAction,
    fetchDeleteDeviceBasketAction,
} from 'store/actions/basketAction';
import { THEME } from 'utils/constants';
import { Button, Container, Image, Paragraph } from 'utils/styles';
import { Checkbox, CheckboxSelected, DeviceCardBasketContainer } from './DeviceCardBasket.style';

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
        <Container gap='8px'>
            <Checkbox onClick={changeSelected}>
                <CheckboxSelected selected={selected} />
            </Checkbox>
            <DeviceCardBasketContainer>
                <Container flexDirection='column' gap='8px' alignItems='center'>
                    <Paragraph
                        textAlign='center'
                        width='100%'
                        fontSize='18px'
                        color={selected ? THEME.white : THEME.lighterGray}
                    >
                        {device.brand.title} {device.title}
                    </Paragraph>
                    <Image
                        height='280px'
                        src={`${process.env.REACT_APP_BACKEND_URL}${device.image}`}
                        alt={device.title}
                    />
                </Container>
                <Container flexDirection='column' justifyContent='center' alignItems='center' gap='8px'>
                    <Container justifyContent='center'>
                        <Button
                            width='36px'
                            height='36px'
                            padding='0'
                            backgroundColor={THEME.green}
                            fontSize='20px'
                            onClick={() => changeCount(count + 1)}
                        >
                            +
                        </Button>
                        <Paragraph
                            width='36px'
                            textAlign='center'
                            fontSize='24px'
                            color={selected ? THEME.white : THEME.lighterGray}
                        >
                            {count}
                        </Paragraph>
                        <Button
                            width='36px'
                            height='36px'
                            padding='0'
                            backgroundColor={THEME.green}
                            fontSize='20px'
                            onClick={() => changeCount(count - 1)}
                        >
                            -
                        </Button>
                    </Container>
                    <Button backgroundColor={THEME.red} width='140px' onClick={handleDelete}>
                        delete
                    </Button>
                </Container>
            </DeviceCardBasketContainer>
        </Container>
    );
};
