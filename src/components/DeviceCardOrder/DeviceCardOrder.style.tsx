import styled from 'styled-components';
import { THEME } from 'utils/constants';

export const DeviceCardOrderStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4px;
    gap: 4px;
    border-radius: 8px;
    min-width: 120px;
    width: 40vw;
    max-width: 192px;
    background: ${THEME.lighterGray}20;
`;
