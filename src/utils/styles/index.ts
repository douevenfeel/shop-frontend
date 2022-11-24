import {
    ButtonProps,
    ContainerProps,
    PageProps,
    ParagraphProps,
    FormProps,
    InputProps,
    ImageProps,
    ArrowProps,
    ManagerInputProps,
} from './types';
import { ArrowIcon } from 'assets';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FiDelete, FiSave } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { THEME } from 'utils/constants';

export const Page = styled.div<PageProps>`
    display: flex;
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    align-items: ${(props) => props.alignItems || 'flex-start'};
    flex-direction: ${(props) => props.flexDirection || 'row'};
    width: 100vw;
    min-height: calc(100vh);
    gap: ${(props) => props.gap || '0px'};
    padding: 80px 20px 20px;
    flex-wrap: wrap;
    background-color: ${THEME.backgroundColor};
    overflow-x: hidden;
`;

export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    align-items: ${(props) => props.alignItems || 'flex-start'};
    flex-direction: ${(props) => props.flexDirection || 'row'};
    width: ${(props) => props.width || 'auto'};
    max-width: ${(props) => props.maxWidth || 'auto'};
    height: ${(props) => props.height || 'auto'};
    position: ${(props) => props.position || 'relative'};
    ${(props) =>
        props.position === 'absolute' &&
        css<ContainerProps>`
            top: ${(props) => props.top || '0px'};
            right: ${(props) => props.right || '0px'};
            bottom: ${(props) => props.bottom || '0px'};
            left: ${(props) => props.left || '0px'};
        `}
    gap: ${(props) => props.gap || '0px'};
    padding: ${(props) => props.padding || '0px'};
    margin: ${(props) => props.margin || '0px'};
    background: ${(props) => props.background || 'inherit'};
    flex-wrap: wrap;
`;

export const Paragraph = styled.p<ParagraphProps>`
    width: ${(props) => props.width || 'auto'};
    min-width: ${(props) => props.minWidth || 'auto'};
    max-width: ${(props) => props.maxWidth || 'auto'};
    font-size: ${(props) => props.fontSize || '16px'};
    font-weight: ${(props) => props.fontWeight || '400'};
    font-style: ${(props) => props.fontStyle || 'normal'};
    text-align: ${(props) => props.textAlign || 'start'};
    color: ${(props) => props.color || '#f0f0f0'};
    z-index: 1;
    word-wrap: break-word;
    cursor: ${(props) => props.cursor || 'auto'};
    ${(props) =>
        props.outlined &&
        css<ParagraphProps>`
            border-bottom: 1px solid ${(props) => props.color || '#f0f0f0'};
        `}
    ${(props) =>
        props.crossed &&
        css<ParagraphProps>`
            font-size: calc(${(props) => props.fontSize || '16px'} - 4px);
            position: relative;
            &:before {
                content: '';
                border-bottom: 1px solid ${THEME.lighterGray}dd;
                position: absolute;
                width: 100%;
                height: 50%;
                transform: rotate(-12deg);
            }
        `};
`;
export const Form = styled.form<FormProps>`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap || '0px'};
    margin: ${(props) => props.margin || '0px'};
`;

export const Button = styled.button<ButtonProps>`
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    padding: ${(props) => props.padding || '6px 16px'};
    font-size: ${(props) => props.fontSize || '16px'};
    border-radius: 8px;
    background: ${(props) => props.backgroundColor || THEME.blue};
    color: ${(props) => props.color || THEME.white};
    border: none;
    cursor: pointer;
    user-select: none;
    outline: none;
`;

export const Input = styled.input<InputProps>`
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    padding: ${(props) => props.padding || '6px 16px'};
    font-size: ${(props) => props.fontSize || '14px'};
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.backgroundColor || THEME.lighterGray};
    outline: none;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
`;

export const Image = styled.img<ImageProps>`
    width: auto;
    height: ${(props) => props.height};
    max-height: ${(props) => props.maxHeight};
    min-height: ${(props) => props.minHeight};
    margin: ${(props) => props.margin || '0px'};
    background-color: inherit;
    cursor: ${(props) => props.pointer && 'pointer'};
`;

export const ArrowStyled = styled(ArrowIcon)<ArrowProps>`
    position: ${(props) => props.position || 'relative'};
    top: ${(props) => props.top || '0px'};
    right: ${(props) => props.right || '0px'};
    bottom: ${(props) => props.bottom || '0px'};
    left: ${(props) => props.left || '0px'};
    width: 12px;
    rotate: ${(props) => props.rotate || '0'}deg;
    cursor: pointer;
    z-index: 20;
`;

export const ManagerInput = styled.input<ManagerInputProps>`
    outline: none;
    cursor: pointer;
    border: none;
    background: transparent;
    width: ${(props) => props.width || 'auto'};
    min-width: ${(props) => props.minWidth || 'auto'};
    max-width: ${(props) => props.maxWidth || 'auto'};
    font-size: ${(props) => props.fontSize || '16px'};
    font-weight: ${(props) => props.fontWeight || '400'};
    font-style: ${(props) => props.fontStyle || 'normal'};
    text-align: ${(props) => props.textAlign || 'start'};
    color: ${(props) => props.color || '#f0f0f0'};
    z-index: 1;
    cursor: ${(props) => props.cursor || 'auto'};
    &:focus {
        background: #333;
    }
    ${(props) =>
        props.outlined &&
        css<ParagraphProps>`
            border-bottom: 1px solid ${(props) => props.color || '#f0f0f0'};
        `}
    ${(props) =>
        props.crossed &&
        css<ParagraphProps>`
            font-size: calc(${(props) => props.fontSize || '16px'} - 4px);
            position: relative;
            &:before {
                content: '';
                border-bottom: 1px solid ${THEME.lighterGray}dd;
                position: absolute;
                width: 100%;
                height: 50%;
                transform: rotate(-12deg);
            }
        `};

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const ManagerInputContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

export const FiDeleteStyled = styled(FiDelete)`
    cursor: pointer;
`;

export const AiOutlineAppstoreAddStyled = styled(AiOutlineAppstoreAdd)`
    cursor: pointer;
`;

export const FiSaveStyled = styled(FiSave)`
    cursor: pointer;
`;
