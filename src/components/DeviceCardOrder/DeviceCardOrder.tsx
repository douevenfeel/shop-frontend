import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Paragraph } from 'utils/styles';
import { DeviceCardOrderStyled } from './DeviceCardOrder.style';

import { DeviceCardOrderProps } from './DeviceCardOrder.types';

export const DeviceCardOrder: React.FC<DeviceCardOrderProps> = ({ id, count, price, device }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/device/${device.id}`);
    };
    return (
        <DeviceCardOrderStyled onClick={handleClick}>
            <Paragraph>{device.brand.title}</Paragraph>
            <Paragraph>{device.title}</Paragraph>
            <Image height='120px' src={`${process.env.REACT_APP_BACKEND_URL}${device.image}`} alt={device.title} />
            <Paragraph>
                {count > 1 && `x${count * 4}`} {price}р.
            </Paragraph>
        </DeviceCardOrderStyled>
    );
};
