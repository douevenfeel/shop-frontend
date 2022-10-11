import styled from 'styled-components';

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 768px;
    width: 100%;
    flex-wrap: wrap;
    gap: 8px;

    @media (max-width: 624px) {
        flex-direction: column;
    }
`;
