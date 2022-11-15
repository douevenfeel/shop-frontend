import { DevicePageContainer } from './DevicePage.style';
import { Category } from 'components/Category';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchRefreshAction } from 'store/actions/authAction';
import { fetchAddDeviceBasketAction } from 'store/actions/basketAction';
import { fetchGetOneDeviceAction } from 'store/actions/deviceAction';
import { resetDevice } from 'store/reducers/deviceReducer';
import { THEME } from 'utils/constants';
import { Button, Container, Image, LinkStyled, Page, Paragraph } from 'utils/styles';

export const DevicePage = () => {
    const { authorized } = useAppSelector((store) => store.user);
    const { device } = useAppSelector((store) => store.device);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            !authorized && dispatch(fetchRefreshAction());
        }
    }, [authorized, dispatch, navigate]);

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
                        <Paragraph>
                            <LinkStyled to='/'>Main</LinkStyled> &gt;
                            <LinkStyled to={`/device/${device.id}`}> {device && device.title}</LinkStyled>
                        </Paragraph>
                        <Image
                            height='440px'
                            src={`${process.env.REACT_APP_BACKEND_URL}${device.image}`}
                            alt={device.title}
                        />
                        <Container flexDirection='column'>
                            <Paragraph fontSize='20px'>{device.title}</Paragraph>
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
