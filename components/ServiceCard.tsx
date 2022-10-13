import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IServiceCard } from "../types/types";
import Heading from "./Heading";
import Text from "./Text";


interface ServiceCardProps {
    data: IServiceCard;       
    className?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({data, className }) => {

    const { image, title, description } = data;
    const classes = classNames('card service-card', className);

    return (
        <Link href='/about'>
            <div className={classes}>
                <div className="service-card__img">
                    <Image
                        src={image}
                        width={'400'}
                        height={'420'}
                    />
                </div>
                <div className="service-card__content">
                    <Heading tag="h4" className="service-card__title">{ title }</Heading>
                    <Text type="body-2" className="service-card__desc">{ description }</Text>
                </div>
            </div>
        </Link>
    );
}

export default ServiceCard;