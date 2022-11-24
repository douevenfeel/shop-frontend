import { useAppSelector } from 'hooks/redux';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
    role?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role }) => {
    const { authorized, user } = useAppSelector((store) => store.user);
    return !!role && user.role === role ? <Outlet /> : authorized ? <Outlet /> : <Navigate to='/' replace />;
};
