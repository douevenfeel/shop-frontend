export interface UpdateUserRole {
    id: number;
    role: Role;
}

export interface GetAllUsers {
    page: number;
    searchBy: SearchBy;
    searchValue: string;
}

export type Role = 'MANAGER' | 'USER';

export type SearchBy = 'email' | 'firstName' | 'lastName' | 'role';
