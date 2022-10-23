import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}api`,
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

axiosInstance.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && error.config && !error.config._isRetry && localStorage.getItem('token')) {
            localStorage.removeItem('token');
            originalRequest._isRetry = true;
            try {
                const response = await axiosInstance.get('/auth/refresh');
                localStorage.setItem('token', response.data.accessToken);
                return axiosInstance.request(originalRequest);
            } catch (e) {
                console.log('forbidden');
            }
        }
        throw error;
    }
);

export default axiosInstance;
