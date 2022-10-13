import classNames from "classnames";
import { FC, ReactNode } from "react";

type HeadingProps = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    hasDecor?: boolean | string;
    className?: string;
    children: ReactNode;
}
 
const Heading: FC<HeadingProps> = ({ tag, hasDecor, className, children }) => {

    const Tag = tag || 'h1';
    const classes = classNames('headline', className, tag, {
        'has-decor': hasDecor,
    });

    return <Tag className={classes}>{ children }</Tag>;
}

export default Heading;