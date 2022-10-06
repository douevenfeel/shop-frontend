import { DeviceCard } from 'components/DeviceCard';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { DeviceModel } from 'models/deviceModel';
import React, { useEffect, useState } from 'react';
import { fetchGetAllDevicesAction } from 'store/actions/deviceAction';
import { Button, Page } from 'utils/styles';

export const ShopPage = () => {
    const dispatch = useAppDispatch();
    const [brandTitle, setBrandTitle] = useState<string>('all');
    const [page, setPage] = useState(1);
    const [orderBy, setOrderBy] = useState();
    const [orderType, setorderType] = useState();
    const { devices } = useAppSelector((store) => store.device);

    const handleBrand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, device: DeviceModel) => {
        e.stopPropagation();
        setBrandTitle(device.brand.title);
    };

    useEffect(() => {
        const values = { page, brandTitle, orderBy, orderType };
        dispatch(fetchGetAllDevicesAction(values));
    }, [brandTitle, dispatch, orderBy, orderType, page]);

    return (
        <Page justifyContent='center' gap='0'>
            {brandTitle !== 'all' && <Button onClick={() => setBrandTitle('all')}>{brandTitle}</Button>}
            {devices?.map((device: DeviceModel) => (
                <DeviceCard
                    device={device}
                    key={device.id}
                    handleBrand={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleBrand(e, device)}
                />
            ))}
        </Page>
    );
};
