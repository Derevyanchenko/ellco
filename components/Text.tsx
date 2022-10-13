import classNames from "classnames";
import { FC, ReactNode } from "react";

type FontType = 'body-1' | 'body-2' | 'body-3' | 'body-4' | 'body-5' | 'body-6' | 'body-7' | 'body-8' | 'body-9';


interface ITextProps {
    type?: FontType;
    className?: string;
    children: ReactNode;
    opacity?: 'opacity-5';
}


const Text: FC<ITextProps> = ({ type, opacity, className, children }) => {
    const classes = classNames('text', type, opacity, className);

    return <p className={classes}>{ children }</p>;
}

export default Text;