import { Dropdown } from 'components/Dropdown';
import { DropdownValueProps } from 'components/Dropdown/Dropdown.types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React from 'react';
import { sortDevices } from 'store/reducers/deviceReducer';
import { Button, Container } from 'utils/styles';

import { ShopPanelProps } from './ShopPanel.types';

const orderValues: DropdownValueProps[] = [
    { title: 'default', order: ['image', 'DESC'] },
    { title: 'price asc', order: ['price', 'ASC'] },
    { title: 'price desc', order: ['price', 'DESC'] },
];

export const ShopPanel: React.FC<ShopPanelProps> = ({ brandTitle, removeBrand }) => {
    const { order } = useAppSelector((store) => store.device);
    const dispatch = useAppDispatch();

    const handleDropdownValue = (value: DropdownValueProps) => {
        dispatch(sortDevices(value));
    };
    return (
        <Container maxWidth='1440px' width='100%' margin='0 0 20px' alignItems='center' justifyContent='space-between'>
            <Button onClick={() => removeBrand()} height='28px' padding='4px 8px'>
                Brand {brandTitle === 'all' ? '' : brandTitle}
            </Button>
            {/* {brandTitle !== 'all' && (
            )} */}
            <Dropdown handleDropdownValue={handleDropdownValue} value={order} valuesArr={orderValues} />
        </Container>
    );
};
