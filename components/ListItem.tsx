import classNames from "classnames";
import { FC } from "react";
import { CheckSvg } from '../svg/index';
import { ListItemProps } from "../types/types";


const ListItem: FC<ListItemProps> = ({ size, className, children }) => {
    const classes = classNames('list-item body-6', className, {
        'list-item--size-sm': size == 'sm'
    });

    return (
        <li className={classes}>
            <CheckSvg /> 
            <span>{ children }</span>
        </li>
    );
}

export default ListItem;