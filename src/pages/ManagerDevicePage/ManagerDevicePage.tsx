import { ManagerDevicePageContainer } from './ManagerDevicePage.style';
import { ManagerDevicePageProps } from './ManagerDevicePage.types';
import { ManagerCategory } from 'components/ManagerCategory';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchRefreshAction } from 'store/actions/authAction';
import { fetchGetOneDeviceAction } from 'store/actions/deviceAction';
import { resetDevice } from 'store/reducers/deviceReducer';
import { THEME } from 'utils/constants';
import { Container, Image, ManagerInput, Paragraph } from 'utils/styles';

export const ManagerDevicePage: React.FC<ManagerDevicePageProps> = () => {
    const { authorized } = useAppSelector((store) => store.user);
    const { device } = useAppSelector((store) => store.device);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState(device.title);

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
        setTimeout(() => !device && navigate('/manager/devices'), 200);
    }, [device, navigate]);

    return (
        <Container justifyContent='center' padding='12px' width='calc(100vw - 300px)'>
            {device && (
                <ManagerDevicePageContainer>
                    <Container gap='16px' flexDirection='column' justifyContent='center' alignItems='flex-start'>
                        <Image
                            height='440px'
                            src={`${process.env.REACT_APP_BACKEND_URL}${device.image}`}
                            alt={device.title}
                        />
                        <Container flexDirection='column'>
                            <ManagerInput fontSize='20px' value={title} onChange={(e) => setTitle(e.target.value)} />
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
                    </Container>
                    {device.categories?.length !== 0 && (
                        <Container flexDirection='column'>
                            <Paragraph fontSize='24px' fontWeight='500'>
                                Подробная информация
                            </Paragraph>
                            <Container flexDirection='column'>
                                {device.categories &&
                                    device?.categories.map((category) => (
                                        <ManagerCategory category={category} key={category.id} />
                                    ))}
                            </Container>
                        </Container>
                    )}
                </ManagerDevicePageContainer>
            )}
        </Container>
    );
};
