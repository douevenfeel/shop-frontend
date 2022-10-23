import { Dropdown } from 'components/Dropdown';
import { DropdownValueProps } from 'components/Dropdown/Dropdown.types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useDebounce } from 'hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import { findDevice, sortDevices } from 'store/reducers/deviceReducer';
import { Button, Container, Input } from 'utils/styles';

import { ShopPanelProps } from './ShopPanel.types';

const orderValues: DropdownValueProps[] = [
    { title: 'default', order: ['image', 'DESC'] },
    { title: 'price asc', order: ['price', 'ASC'] },
    { title: 'price desc', order: ['price', 'DESC'] },
];

export const ShopPanel: React.FC<ShopPanelProps> = ({ brandTitle, removeBrand }) => {
    const { order } = useAppSelector((store) => store.device);
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');
    const debouncedValue = useDebounce(value);

    const handleDropdownValue = (value: DropdownValueProps) => {
        dispatch(sortDevices(value));
    };

    useEffect(() => {
        dispatch(findDevice(debouncedValue));
    }, [debouncedValue, dispatch]);

    return (
        <Container
            maxWidth='1440px'
            width='100%'
            margin='0 0 20px'
            alignItems='center'
            justifyContent='space-between'
            gap='20px'
        >
            <Button onClick={() => removeBrand()} height='28px' padding='4px 8px'>
                Brand {brandTitle === 'all' ? '' : brandTitle}
            </Button>
            <Input placeholder='Enter device...' onChange={(e) => setValue(e.target.value)} />
            <Dropdown handleDropdownValue={handleDropdownValue} value={order} valuesArr={orderValues} />
        </Container>
    );
};
