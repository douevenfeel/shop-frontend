import { ManagerDevicePageContainer } from './ManagerDevicePage.style';
import { ManagerDevicePageProps } from './ManagerDevicePage.types';
import { ManagerCategory } from 'components/ManagerCategory';
import { ManagerDeviceInfo } from 'components/ManagerDeviceInfo';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchGetOneDeviceAction } from 'store/actions/deviceAction';
import { resetDevice } from 'store/reducers/deviceReducer';
import { Container, Paragraph } from 'utils/styles';

export const ManagerDevicePage: React.FC<ManagerDevicePageProps> = () => {
    const { device, fetchActionStatus } = useAppSelector((store) => store.device);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        id && dispatch(fetchGetOneDeviceAction({ id: +id }));
        return () => {
            dispatch(resetDevice());
        };
    }, [dispatch, id, fetchActionStatus]);

    useEffect(() => {
        setTimeout(() => !device && navigate('/manager/devices'), 200);
    }, [device, navigate]);

    return (
        <Container justifyContent='center' padding='12px' width='calc(100vw - 300px)'>
            {device && (
                <ManagerDevicePageContainer>
                    {!!device && <ManagerDeviceInfo device={device} />}
                    <Container flexDirection='column'>
                        <Paragraph fontSize='24px' fontWeight='500'>
                            Подробная информация
                        </Paragraph>
                        <Container flexDirection='column' width='100%'>
                            {device.categories &&
                                device?.categories.map((category) => (
                                    <ManagerCategory deviceId={device.id} category={category} key={category.id} />
                                ))}
                            <ManagerCategory category={{ title: '' }} deviceId={device.id} />
                        </Container>
                    </Container>
                </ManagerDevicePageContainer>
            )}
        </Container>
    );
};
