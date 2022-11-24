import { DeviceCard } from 'components/DeviceCard';
import { Navigation } from 'components/Navigation';
import { ShopPanel } from 'components/ShopPanel';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { DeviceModel } from 'models/deviceModel';
import React, { useEffect, useState } from 'react';
import { fetchGetAllDevicesAction } from 'store/actions/deviceAction';
import { changePageDevice } from 'store/reducers/deviceReducer';
import { Container, Page, Paragraph } from 'utils/styles';

export const ShopPage = () => {
    const dispatch = useAppDispatch();
    const { devices, count, limit, page, order, title, fromPrice, toPrice } = useAppSelector((store) => store.device);
    const [brandTitle, setBrandTitle] = useState<string>('all');

    const handleBrand = (e: React.MouseEvent<HTMLElement, MouseEvent>, brandTitle: string) => {
        e.stopPropagation();
        dispatch(changePageDevice(1));
        setBrandTitle(brandTitle);
    };

    const handlePage = (page: number) => {
        dispatch(changePageDevice(page));
    };

    useEffect(() => {
        const values = { page, brandTitle, order: order.order, title, fromPrice, toPrice };
        dispatch(fetchGetAllDevicesAction(values));
    }, [brandTitle, dispatch, order, page, title, fromPrice, toPrice]);

    return (
        <Page justifyContent='center'>
            <Container flexDirection='column' alignItems='center'>
                {devices && devices.length === 0 && !title ? (
                    <Paragraph fontSize='18px'>no phones in the shop yet</Paragraph>
                ) : devices && devices.length === 0 ? (
                    <>
                        <ShopPanel brandTitle={brandTitle} removeBrand={() => setBrandTitle('all')} />
                        <Paragraph fontSize='18px'>no phones</Paragraph>
                    </>
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
