import { ManagerDeviceCard } from 'components/ManagerDeviceCard';
import { Navigation } from 'components/Navigation';
import { ShopPanel } from 'components/ShopPanel';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { DeviceModel } from 'models/deviceModel';
import React, { useEffect } from 'react';
import { fetchGetAllDevicesAction } from 'store/actions/deviceAction';
import { changePageDevice } from 'store/reducers/deviceReducer';
import { Container } from 'utils/styles';

export const ManagerDevicesPage = () => {
    const dispatch = useAppDispatch();
    const { devices, count, limit, page, order, title, fromPrice, toPrice } = useAppSelector((store) => store.device);

    const handlePage = (page: number) => {
        dispatch(changePageDevice(page));
    };

    useEffect(() => {
        const values = { page, order: order.order, title, fromPrice, toPrice };
        dispatch(fetchGetAllDevicesAction(values));
    }, [dispatch, order, page, title, fromPrice, toPrice]);

    return (
        <Container padding='12px' flexDirection='column' alignItems='center' width='calc(100vw - 300px)'>
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
