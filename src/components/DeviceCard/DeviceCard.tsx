import { useAppSelector } from 'hooks/redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { THEME } from 'utils/constants';
import { Button, Container, Image, Paragraph } from 'utils/styles';
import { Card } from './DeviceCard.style';

import { DeviceCardProps } from './DeviceCard.types';

export const DeviceCard: React.FC<DeviceCardProps> = ({ device, handleBrand }) => {
    const { authorized } = useAppSelector((store) => store.user);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/device/${device.id}`);
    };

    const handleAddToCard = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
    };

    return (
        <Card onClick={handleClick}>
            <Image height='220px' src={`${process.env.REACT_APP_BACKEND_URL}${device.image}`} alt={device.title} />
            <Container
                justifyContent='flex-start'
                alignItems='flex-start'
                flexDirection='column'
                gap='2px'
                width='100%'
            >
                <Paragraph outlined color={THEME.blue} fontWeight='500' onClick={handleBrand}>
                    {device.brand.title}
                </Paragraph>
                <Container justifyContent='space-between' width='100%'>
                    <Paragraph>
                        {device.brand.title} {device.title}
                    </Paragraph>
                    {device.oldPrice === 0 ? (
                        <Paragraph fontWeight='500'>{device.price} р.</Paragraph>
                    ) : (
                        <Container alignItems='flex-end' flexDirection='column' position='absolute' top='-18px'>
                            <Paragraph crossed color={THEME.lighterGray}>
                                {device.oldPrice}
                            </Paragraph>
                            <Paragraph fontWeight='500'>{device.price} р.</Paragraph>
                        </Container>
                    )}
                </Container>
            </Container>
            {authorized && <Button onClick={handleAddToCard}>add to cart</Button>}
        </Card>
    );
};
