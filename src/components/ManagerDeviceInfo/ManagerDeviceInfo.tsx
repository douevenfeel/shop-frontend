import { ManagerDeviceInfoProps } from './ManagerDeviceInfo.types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useCallback, useEffect, useState } from 'react';
import { fetchUpdateDeviceAction } from 'store/actions/deviceAction';
import { Container, Paragraph, ManagerInput, Button, Image } from 'utils/styles';

export const ManagerDeviceInfo: React.FC<ManagerDeviceInfoProps> = () => {
    const dispatch = useAppDispatch();
    const { brand, id, image, price, title } = useAppSelector((store) => store.device.device);
    const [newTitle, setNewTitle] = useState('');
    const [newPrice, setNewPrice] = useState<string | number>('');
    const [newBrandTitle, setNewBrandTitle] = useState('');

    useEffect(() => {
        setNewTitle(title);
        setNewPrice(price);
        setNewBrandTitle(brand?.title);
    }, [brand, brand?.title, price, title]);

    const handleSave = () => {
        const values = {
            id,
            title: newTitle,
            price: +newPrice,
            brandTitle: newBrandTitle,
        };
        newTitle && +newPrice && newBrandTitle && dispatch(fetchUpdateDeviceAction(values));
    };

    const handleNewPrice = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        +e.target.value === 0 ? setNewPrice('') : setNewPrice(+e.target.value);
    }, []);

    return (
        <Container gap='16px' flexDirection='column' justifyContent='center' alignItems='flex-start'>
            <Image height='440px' src={`${process.env.REACT_APP_BACKEND_URL}${image}`} alt={title} />
            <Container flexDirection='column' gap='4px'>
                <Container alignItems='center' gap='8px'>
                    <Paragraph>Brand:</Paragraph>
                    <ManagerInput
                        value={newBrandTitle}
                        onChange={(e) => setNewBrandTitle(e.target.value)}
                        placeholder='Input brand title...'
                    />
                </Container>
                <Container alignItems='center' gap='8px'>
                    <Paragraph>Title:</Paragraph>
                    <ManagerInput
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder='Input device title...'
                    />
                </Container>
                <Container alignItems='center' gap='8px'>
                    <Paragraph>Price:</Paragraph>
                    <ManagerInput
                        type='number'
                        value={newPrice}
                        onChange={handleNewPrice}
                        placeholder='Input device price...'
                    />
                </Container>
                <Button onClick={handleSave}>save changes</Button>
            </Container>
        </Container>
    );
};
