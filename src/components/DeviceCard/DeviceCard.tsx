import { Card } from './DeviceCard.style';
import { DeviceCardProps } from './DeviceCard.types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAddDeviceBasketAction } from 'store/actions/basketAction';
import { THEME } from 'utils/constants';
import { Button, Container, Image, Paragraph } from 'utils/styles';

export const DeviceCard: React.FC<DeviceCardProps> = ({ device, handleBrand }) => {
    const { authorized } = useAppSelector((store) => store.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/device/${device.id}`);
    };

    const handleAddToBasket = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        dispatch(fetchAddDeviceBasketAction({ deviceId: device.id }));
    };

    return (
        <Card onClick={handleClick}>
            <Image height='240px' src={`${process.env.REACT_APP_BACKEND_URL}${device.image}`} alt={device.title} />
            <Container
                justifyContent='flex-start'
                alignItems='flex-start'
                flexDirection='column'
                gap='2px'
                width='100%'
            >
                <Paragraph outlined color={THEME.blue} fontWeight='500' onClick={handleBrand} cursor='pointer'>
                    {device.brand.title}
                </Paragraph>
                <Container justifyContent='space-between' width='100%'>
                    <Paragraph>{device.title}</Paragraph>
                    <Paragraph fontWeight='500'>{device.price} р.</Paragraph>
                </Container>
            </Container>
            {authorized && (
                <Button onClick={handleAddToBasket} width='140px' height='32px' padding='4px 12px'>
                    add to basket
                </Button>
            )}
        </Card>
    );
};
