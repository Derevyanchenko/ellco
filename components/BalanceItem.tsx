import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Button from "./Button";
import Heading from "./Heading";
import ListItem from "./ListItem";
import Text from "./Text";


interface IBank {
    id: number;
    name?: 'Ubank',
    logo: string;
    url: string;
    className?: string;
}

interface BalanceItemProps {
    data: IBank;
    className?: string;
}

const BalanceItem: FC<BalanceItemProps> = ({data, className }) => {

    const { logo } = data;
    const classes   = classNames('card balance-card', className);

    return (
            <div className={classes}>
                <div className="balance-card__wrapper">
                    <div className="balance-card__logo">
                        <Image
                            src={logo}
                            width={'135'}
                            height={'47'}
                            alt={data.name}
                        />
                    </div>
                    <div className="balance-card__controls">
                        <ListItem>Без комиссии</ListItem>
                        <Button href={'#'}>Оплатить</Button>
                    </div>
                </div>
            </div>
    );
}

export default BalanceItem;