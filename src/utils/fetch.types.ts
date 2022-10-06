export interface GetAllDevicesProps {
    limit?: number;
    page?: number;
    orderBy?: string;
    orderType?: string;
    brandTitle?: string;
}

export interface SignupProps {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface SigninProps {
    email: string;
    password: string;
}
