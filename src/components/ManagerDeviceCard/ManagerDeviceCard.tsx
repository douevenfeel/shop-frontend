import { Card } from './ManagerDeviceCard.style';
import { ManagerDeviceCardProps } from './ManagerDeviceCard.types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { THEME } from 'utils/constants';
import { Container, Image, Paragraph } from 'utils/styles';

export const ManagerDeviceCard: React.FC<ManagerDeviceCardProps> = ({ device }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/manager/device/${device.id}`);
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
                <Paragraph outlined color={THEME.blue} fontWeight='500' cursor='pointer'>
                    {device.brand.title}
                </Paragraph>
                <Container justifyContent='space-between' width='100%'>
                    <Paragraph>{device.title}</Paragraph>
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
        </Card>
    );
};
