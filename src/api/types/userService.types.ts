export interface UpdateUserRole {
    id: number;
    role: Role;
}

export type Role = 'ADMIN' | 'USER';
