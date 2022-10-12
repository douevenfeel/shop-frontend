import styled from 'styled-components';

export const DevicePageContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 24px;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
    }
`;
