export interface PageProps {
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
}

export interface ContainerProps {
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    width?: string;
    height?: string;
    position?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    gap?: string;
    padding?: string;
    margin?: string;
    background?: string;
}

export interface ParagraphProps {
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    fontSize?: string;
    fontWeight?: string;
    fontStyle?: string;
    textAlign?: string;
    color?: string;
    cursor?: string;
    outlined?: boolean;
    crossed?: boolean;
}

export interface FormProps {
    gap?: string;
    margin?: string;
}

export interface ButtonProps {
    width?: string;
    height?: string;
    padding?: string;
    fontSize?: string;
    backgroundColor?: string;
}

export interface InputProps {
    width?: string;
    height?: string;
    padding?: string;
    fontSize?: string;
    backgroundColor?: string;
}

export interface ImageProps {
    height: string;
    maxHeight?: string;
    minHeight?: string;
    margin?: string;
    pointer?: boolean;
}
