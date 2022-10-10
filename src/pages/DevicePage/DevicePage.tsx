import { Category } from 'components/Category';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchAddDeviceBasketAction } from 'store/actions/basketAction';
import { fetchGetOneDeviceAction } from 'store/actions/deviceAction';
import { resetDevice } from 'store/reducers/deviceReducer';
import { THEME } from 'utils/constants';
import { Button, Container, Image, Page, Paragraph } from 'utils/styles';

export const DevicePage = () => {
    const { authorized } = useAppSelector((store) => store.user);
    const { device } = useAppSelector((store) => store.device);
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const id = +pathname.split('/')[2];
        dispatch(fetchGetOneDeviceAction(id));

        return () => {
            dispatch(resetDevice());
        };
    }, [dispatch, pathname]);

    useEffect(() => {
        setTimeout(() => !device && navigate('/shop'), 200);
    }, [device, navigate]);

    const handleAddToBasket = () => {
        dispatch(fetchAddDeviceBasketAction(device.id));
    };

    return (
        <Page justifyContent='center'>
            {device && (
                <Container flexDirection='column' gap='24px' alignItems='center'>
                    <Container gap='16px' flexDirection='column' alignItems='flex-start'>
                        <Image
                            height='440px'
                            src={`${process.env.REACT_APP_BACKEND_URL}${device.image}`}
                            alt={device.title}
                        />
                        <Container flexDirection='column'>
                            <Paragraph fontSize='20px'>
                                {device.brand?.title} {device.title}
                            </Paragraph>
                            {device.oldPrice === 0 ? (
                                <Paragraph fontWeight='500' fontSize='20px'>
                                    {device.price} р.
                                </Paragraph>
                            ) : (
                                <Container flexDirection='column'>
                                    <Paragraph crossed color={THEME.lighterGray} fontSize='20px'>
                                        {device.oldPrice}
                                    </Paragraph>
                                    <Paragraph fontWeight='500' fontSize='20px'>
                                        {device.price} р.
                                    </Paragraph>
                                </Container>
                            )}
                        </Container>
                        {authorized && (
                            <Container justifyContent='center' width='100%'>
                                <Button width='140px' height='32px' padding='4px 12px' onClick={handleAddToBasket}>
                                    add to basket
                                </Button>
                            </Container>
                        )}
                    </Container>
                    <Container flexDirection='column'>
                        <Paragraph fontSize='24px' fontWeight='500'>
                            Подробная информация
                        </Paragraph>
                        <Container flexDirection='column'>
                            {device.categories &&
                                device?.categories.map((category) => (
                                    <Category category={category} key={category.id} />
                                ))}
                        </Container>
                    </Container>
                </Container>
            )}
        </Page>
    );
};
