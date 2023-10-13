import classNames from "classnames";
import { FC } from "react";
import { ChannelSvg, SaleSvg, SpeedSvg } from "../svg";
import { IRate } from "../types/types";
import Button from "./Button";
import Heading from "./Heading";
import List from "./List";
import Text from "./Text";

interface RateItemProps {
    data: IRate;       
    className?: string;
}

const RateItem: FC<RateItemProps> = ({data, className }) => {

    const isSaleItem = (price: number | string) => price !== null && price !== undefined

    const classes = classNames('card rate-card', className, {
        'rate-card--sale': isSaleItem(data.oldPrice),
        'rate-card--featured': data.featured
    });

    return (
        <div className={classes}>
            { isSaleItem(data.oldPrice) &&  
                <span className="rate-card__sale-icon"><SaleSvg /></span>
            }
            <div className="rate-card__top">
                <Heading tag="h3" className="mb-30 rate-card__title">{ data.title }</Heading>
                <div className="rate-card__params rate-params">
                    <div className="rate-params__item">
                        <Text type="body-2" className="mb-2 text--icon-left">
                            <SpeedSvg/>
                            { data.speed } Мбит/с
                        </Text>
                        <Text type="body-7" opacity="opacity-5">
                            скорость интернета
                        </Text>
                    </div>
                    <div className="rate-params__item">
                        <Text type="body-2" className="mb-2 text--icon-left">
                            <ChannelSvg/>
                            { data.channels } каналов
                        </Text>
                    </div>
                </div>

                <List data={data.advantages} size="sm" className="mt-30 rate-card__advan"/>

            </div>
            <div className="rate-card__bottom">
                <div className="card-price">
                    { data.oldPrice &&  
                        <del className="old-price color-sec-green">{ data.oldPrice }</del>
                    }
                    <p className="current-price">{ data.price }</p>
                    <sup className="currency">curr./мес</sup>    
                </div>
                <div className="rate-card__controls">
                    <Button size="full" className="mb-5">Подключить</Button>
                    <Button 
                        href="https:google.com" 
                        color="color-blue" 
                        bg="bg-sec-grey"
                        size="full"
                    >Подробнее</Button>
                </div>
            </div>
        </div>
    );
}

export default RateItem;