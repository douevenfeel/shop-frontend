import styled from 'styled-components';
import { THEME } from 'utils/constants';

export const Card = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 320px;
    background: ${THEME.darkerGray};
    border-radius: 12px;
    padding: 24px;
    gap: 12px;
`;
