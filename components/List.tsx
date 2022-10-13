import classNames from "classnames";
import { FC, ReactNode } from "react";
import { ListItemProps } from "../types/types";
import ListItem from "./ListItem";


interface ListProps {
    data?: ListItemProps[];
    size?: 'sm';
    style?: 'transparent';
    className?: string;
}

const List: FC<ListProps> = ({data, size, style, className}) => {

    
    const classes = classNames('list-group', className, {
        
    });

    return (
        <>
            { data && (
                <ul className={classes}>
                    { data.map((props) => (
                        <ListItem size={size} key={ props.id }>{ props.text }</ListItem>
                    )) }
                </ul>
            )}
        </>
    );
}

export default List;