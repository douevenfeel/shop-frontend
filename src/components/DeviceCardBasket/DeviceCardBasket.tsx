import { Checkbox, CheckboxSelected, DeviceCardBasketContainer } from './DeviceCardBasket.style';
import { DeviceCardBasketProps } from './DeviceCardBasket.types';
import { useAppDispatch } from 'hooks/redux';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    fetchChangeCountBasketAction,
    fetchChangeSelectedBasketAction,
    fetchDeleteDeviceBasketAction,
} from 'store/actions/basketAction';
import { THEME } from 'utils/constants';
import { Button, Container, Image, Paragraph } from 'utils/styles';

export const DeviceCardBasket: React.FC<DeviceCardBasketProps> = ({ id, count, selected, device }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const changeCount = useCallback(
        (count: number) => {
            dispatch(fetchChangeCountBasketAction({ deviceId: device.id, count }));
        },
        [device.id, dispatch],
    );

    const changeSelected = useCallback(() => {
        dispatch(fetchChangeSelectedBasketAction({ deviceId: device.id, selected: !selected }));
    }, [device.id, dispatch, selected]);

    const handleDelete = useCallback(() => {
        dispatch(fetchDeleteDeviceBasketAction({ deviceId: device.id }));
    }, [device.id, dispatch]);

    const handleClick = () => {
        navigate(`/device/${device.id}`);
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
                        {device.title}
                    </Paragraph>
                    <Image
                        height='280px'
                        src={`${process.env.REACT_APP_BACKEND_URL}${device.image}`}
                        alt={device.title}
                        onClick={handleClick}
                    />
                    <Paragraph color={selected ? THEME.white : THEME.lighterGray}>{device.price} р.</Paragraph>
                </Container>
                <Container flexDirection='column' justifyContent='center' alignItems='center' gap='8px'>
                    <Container justifyContent='center'>
                        <Button
                            width='36px'
                            height='36px'
                            padding='0'
                            backgroundColor={THEME.blue}
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
                            backgroundColor={THEME.blue}
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
