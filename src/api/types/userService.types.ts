export interface UpdateUserRole {
    id: number;
    role: Role;
}

export type Role = 'MANAGER' | 'USER';
