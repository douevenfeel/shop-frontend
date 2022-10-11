import { DeviceCard } from 'components/DeviceCard';
import { Navigation } from 'components/Navigation';
import { ShopPanel } from 'components/ShopPanel';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { DeviceModel } from 'models/deviceModel';
import React, { useEffect, useState } from 'react';
import { fetchGetAllDevicesAction } from 'store/actions/deviceAction';
import { changePage } from 'store/reducers/deviceReducer';
import { Container, Page, Paragraph } from 'utils/styles';

export const ShopPage = () => {
    const dispatch = useAppDispatch();
    const [brandTitle, setBrandTitle] = useState<string>('all');
    const { devices, page, order } = useAppSelector((store) => store.device);

    const handleBrand = (e: React.MouseEvent<HTMLElement, MouseEvent>, brandTitle: string) => {
        e.stopPropagation();
        dispatch(changePage(1));
        setBrandTitle(brandTitle);
    };

    useEffect(() => {
        const values = { page, brandTitle, order: order.order };
        dispatch(fetchGetAllDevicesAction(values));
    }, [brandTitle, dispatch, order, page]);

    return (
        <Page justifyContent='center'>
            <Container flexDirection='column' alignItems='center'>
                {devices && devices.length === 0 ? (
                    <Paragraph>no phones yet</Paragraph>
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
                        <Navigation />
                    </>
                )}
            </Container>
        </Page>
    );
};
