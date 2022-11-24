import { Tab } from './ManagerSidebar.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'utils/styles';

export const ManagerSidebar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleTab = (path: string) => {
        navigate(`/manager/${path}`);
    };

    const handleIsCurrent = (tabname: string) => {
        return pathname.split('/')[2]?.includes(tabname);
    };

    return (
        <Container flexDirection='column' width='200px' height='calc(100vh - 60px)' padding='12px'>
            <Tab isCurrent={handleIsCurrent('device')} onClick={() => handleTab('devices')}>
                devices
            </Tab>
            <Tab isCurrent={handleIsCurrent('user')} onClick={() => handleTab('users')}>
                users
            </Tab>
            <Tab isCurrent={handleIsCurrent('order')} onClick={() => handleTab('orders')}>
                orders
            </Tab>
        </Container>
    );
};
