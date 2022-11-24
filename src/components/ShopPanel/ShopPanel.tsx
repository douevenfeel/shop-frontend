import { ShopPanelProps } from './ShopPanel.types';
import { Dropdown } from 'components/Dropdown';
import { DropdownValueProps } from 'components/Dropdown/Dropdown.types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useDebounce } from 'hooks/useDebounce';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { findDevice, sortDevices } from 'store/reducers/deviceReducer';
import { Button, Container, Input, Paragraph } from 'utils/styles';

const orderValues: DropdownValueProps[] = [
    { title: 'default', order: ['image', 'DESC'] },
    { title: 'price asc', order: ['price', 'ASC'] },
    { title: 'price desc', order: ['price', 'DESC'] },
];

export const ShopPanel: React.FC<ShopPanelProps> = ({ brandTitle, removeBrand }) => {
    const { order } = useAppSelector((store) => store.device);
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState<string>('');
    const [fromPrice, setFromPrice] = useState<number | string>('');
    const [toPrice, setToPrice] = useState<number | string>('');
    const debouncedTitle = useDebounce(title);
    const debouncedFromPrice = useDebounce(fromPrice);
    const debouncedToPrice = useDebounce(toPrice);

    const handleDropdownValue = (value: DropdownValueProps) => {
        dispatch(sortDevices(value));
    };

    useEffect(() => {
        dispatch(findDevice({ title: debouncedTitle, fromPrice: debouncedFromPrice, toPrice: debouncedToPrice }));
    }, [debouncedFromPrice, debouncedTitle, debouncedToPrice, dispatch]);

    const handleFromPrice = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        +e.target.value === 0 ? setFromPrice('') : setFromPrice(+e.target.value);
    }, []);

    const handleToPrice = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        +e.target.value === 0 ? setToPrice('') : setToPrice(+e.target.value);
    }, []);

    return (
        <Container
            maxWidth='1440px'
            width='100%'
            margin='0 0 20px'
            alignItems='center'
            justifyContent='space-between'
            gap='20px'
        >
            {!!brandTitle && (
                <Button onClick={removeBrand} height='28px' padding='4px 8px'>
                    Brand {brandTitle === 'all' ? '' : brandTitle}
                </Button>
            )}
            <Container gap='8px'>
                <Container gap='8px' alignItems='center'>
                    <Paragraph>from</Paragraph>
                    <Input
                        placeholder='From price...'
                        type='number'
                        value={fromPrice.toString()}
                        onChange={handleFromPrice}
                        width='160px'
                    />
                </Container>
                <Container gap='8px' alignItems='center'>
                    <Paragraph>to</Paragraph>
                    <Input
                        placeholder='To price...'
                        type='number'
                        value={toPrice.toString()}
                        onChange={handleToPrice}
                        width='160px'
                    />
                </Container>
            </Container>
            <Input placeholder='Enter device...' value={title} onChange={(e) => setTitle(e.target.value)} />
            <Dropdown handleDropdownValue={handleDropdownValue} value={order} valuesArr={orderValues} />
        </Container>
    );
};
