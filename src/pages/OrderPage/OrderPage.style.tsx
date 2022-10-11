import styled from 'styled-components';
import { THEME } from 'utils/constants';

export const OrderPageStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    max-width: 804px;
    padding: 12px;
    border-radius: 8px;
    gap: 4px;
    background: ${THEME.darkerGray};
`;
