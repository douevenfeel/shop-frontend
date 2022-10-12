export interface NavigationProps {
    count: number;
    limit: number;
    page: number;
    handlePage: (page: number) => void;
}
