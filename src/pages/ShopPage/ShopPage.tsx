import { DeviceCard } from 'components/DeviceCard';
import { Navigation } from 'components/Navigation';
import { ShopPanel } from 'components/ShopPanel';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { DeviceModel } from 'models/deviceModel';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRefreshAction } from 'store/actions/authAction';
import { fetchGetAllDevicesAction } from 'store/actions/deviceAction';
import { changePageDevice, findDevice } from 'store/reducers/deviceReducer';
import { Container, Page, Paragraph } from 'utils/styles';

export const ShopPage = () => {
    const dispatch = useAppDispatch();
    const { devices, count, limit, page, order, title } = useAppSelector((store) => store.device);
    const { authorized } = useAppSelector((store) => store.user);
    const [brandTitle, setBrandTitle] = useState<string>('all');
    const navigate = useNavigate();

    const handleBrand = (e: React.MouseEvent<HTMLElement, MouseEvent>, brandTitle: string) => {
        e.stopPropagation();
        dispatch(changePageDevice(1));
        setBrandTitle(brandTitle);
    };

    const handlePage = (page: number) => {
        dispatch(changePageDevice(page));
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            !authorized && dispatch(fetchRefreshAction());
        }
    }, [authorized, dispatch, navigate]);

    useEffect(() => {
        const values = { page, brandTitle, order: order.order, title };
        dispatch(fetchGetAllDevicesAction(values));
    }, [brandTitle, dispatch, order, page, title]);

    return (
        <Page justifyContent='center'>
            <Container flexDirection='column' alignItems='center'>
                {devices && devices.length === 0 && !title ? (
                    <Paragraph fontSize='18px'>no phones in the shop yet</Paragraph>
                ) : (
                    <>
                        <ShopPanel brandTitle={brandTitle} removeBrand={() => setBrandTitle('all')} />
                        <Container justifyContent='center' padding='0 auto' gap='20px' maxWidth='1440px'>
                            {devices?.map((device: DeviceModel) => (
                                <DeviceCard
                                    device={device}
                                    key={device.id}
                                    handleBrand={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                                        handleBrand(e, device.brand.title)
                                    }
                                />
                            ))}
                        </Container>
                        <Navigation count={count} limit={limit} page={page} handlePage={handlePage} />
                    </>
                )}
            </Container>
        </Page>
    );
};
