import styled from 'styled-components';
import { THEME } from 'utils/constants';

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    padding: 20px 32px;
    gap: 12px;
    background: ${THEME.gray};
`;
