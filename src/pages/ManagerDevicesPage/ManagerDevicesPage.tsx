import { ManagerDeviceCard } from 'components/ManagerDeviceCard';
import { Navigation } from 'components/Navigation';
import { ShopPanel } from 'components/ShopPanel';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { DeviceModel } from 'models/deviceModel';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchGetAllDevicesAction } from 'store/actions/deviceAction';
import { changePageDevice } from 'store/reducers/deviceReducer';
import { Button, Container } from 'utils/styles';

export const ManagerDevicesPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { devices, count, limit, page, order, title, fromPrice, toPrice } = useAppSelector((store) => store.device);

    const handlePage = (page: number) => {
        dispatch(changePageDevice(page));
    };

    const handleCreateNewDevice = () => {
        navigate('/manager/create-device');
    };

    useEffect(() => {
        const values = { page, order: order.order, title, fromPrice, toPrice };
        dispatch(fetchGetAllDevicesAction(values));
    }, [dispatch, order, page, title, fromPrice, toPrice]);

    return (
        <Container padding='12px' flexDirection='column' alignItems='center' width='calc(100vw - 300px)' gap='8px'>
            <Container justifyContent='flex-end' width='100%'>
                <Button onClick={handleCreateNewDevice}>create new device</Button>
            </Container>
            <ShopPanel />
            <Container justifyContent='center' padding='0 auto' gap='20px' maxWidth='1440px'>
                {devices?.map((device: DeviceModel) => (
                    <ManagerDeviceCard device={device} key={device.id} />
                ))}
            </Container>
            <Navigation count={count} limit={limit} page={page} handlePage={handlePage} />
        </Container>
    );
};
