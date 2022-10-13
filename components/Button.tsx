import classNames from "classnames";
import { FC, MouseEvent, ReactNode } from "react";
import { ColorType, BackgroundType } from '../types/types'

interface TextProps {
    color?: ColorType;
    bg?: BackgroundType;
    size?: 'full' | 'lg' | 'md' | 'sm' | 'xs'
    className?: string;
    children: ReactNode;
    onClick?: (e: MouseEvent) => void;
    href?: any;
}

const Button: FC<TextProps> = ({ 
    color, bg, size, className, children, onClick, ...attrs 
}) => {

    const Tag = attrs.href ? 'a' : 'button';
    const textColor = color ? color : 'color-dark';
    const bgColor = bg ? bg : 'bg-default bg-yellow'; 

    const classes = classNames('btn', textColor, bgColor, className, {
        'btn-full': size == 'full',
        'btn-lg': size == 'lg',
        'btn-md': size == 'md',
        'btn-sm': size == 'sm',
        'btn-xs': size == 'xs',
    });

    return (
        <Tag 
            {...attrs}
            className={classes}
            onClick={onClick}
        >
            { children }
        </Tag>
    );
}

export default Button;