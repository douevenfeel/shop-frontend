import styled from 'styled-components';
import { THEME } from 'utils/constants';

export const Card = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
    width: 320px;
    max-height: 460px;
    background: ${THEME.darkerGray};
    border-radius: 12px;
    padding: 24px 24px;
    margin: 4px;
    align-content: flex-start;
    gap: 12px;
`;
