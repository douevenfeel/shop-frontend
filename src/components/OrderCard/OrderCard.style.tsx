import styled from 'styled-components';
import { THEME } from 'utils/constants';

export const OrderCardStyled = styled.div`
    max-width: 360px;
    width: calc(50vw - 40px);
    min-width: 288px;
    background: ${THEME.darkerGray};
    border-radius: 8px;
    padding: 20px;
    gap: 20px;
`;
