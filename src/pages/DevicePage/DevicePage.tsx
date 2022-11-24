import { DevicePageContainer } from './DevicePage.style';
import { Category } from 'components/Category';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchAddDeviceBasketAction } from 'store/actions/basketAction';
import { fetchGetOneDeviceAction } from 'store/actions/deviceAction';
import { resetDevice } from 'store/reducers/deviceReducer';
import { Button, Container, Image, Page, Paragraph } from 'utils/styles';

export const DevicePage = () => {
    const { authorized } = useAppSelector((store) => store.user);
    const { device } = useAppSelector((store) => store.device);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        id && dispatch(fetchGetOneDeviceAction({ id: +id }));

        return () => {
            dispatch(resetDevice());
        };
    }, [dispatch, id]);

    useEffect(() => {
        setTimeout(() => !device && navigate('/shop'), 200);
    }, [device, navigate]);

    const handleAddToBasket = () => {
        dispatch(fetchAddDeviceBasketAction({ deviceId: device.id }));
    };

    return (
        <Page justifyContent='center'>
            {device && (
                <DevicePageContainer>
                    <Container gap='16px' flexDirection='column' justifyContent='center' alignItems='flex-start'>
                        <Image
                            height='440px'
                            src={`${process.env.REACT_APP_BACKEND_URL}${device.image}`}
                            alt={device.title}
                        />
                        <Container flexDirection='column'>
                            <Paragraph fontSize='20px'>{device.title}</Paragraph>
                            <Paragraph fontWeight='500' fontSize='20px'>
                                {device.price} р.
                            </Paragraph>
                        </Container>
                        {authorized && (
                            <Container justifyContent='center' width='100%'>
                                <Button width='140px' height='32px' padding='4px 12px' onClick={handleAddToBasket}>
                                    add to basket
                                </Button>
                            </Container>
                        )}
                    </Container>
                    {device.categories?.length !== 0 && (
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
                    )}
                </DevicePageContainer>
            )}
        </Page>
    );
};
