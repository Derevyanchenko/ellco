import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { INewsCard } from "../types/types";
import Heading from "./Heading";
import Text from "./Text";


interface NewsCardProps {
    data: INewsCard;       
    className?: string;
    size?: 'lg';
}

const NewsCard: FC<NewsCardProps> = ({data, size, className }) => {

    const { image, date, title } = data;
    const classes   = classNames('card news-card', className, {
        'news-card--lg': size == 'lg'
    });

    return (
        <Link href={'/news/' + data.id}>
            <div className={classes}>
                { size !== 'lg' ?
                    <div className="news-card__img">
                        <Image
                            src={image}
                            width={'320'}
                            height={'303'}
                        />
                    </div>
                : 
                    <div 
                        className="news-card__img" 
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    >
                    </div>
                }
                <div className="news-card__content">
                    <Text type="body-7" className="news-card__date">{ date }</Text>
                    <Heading tag={size == 'lg' ? 'h3' : 'h4'} className="news-card__title">{ title }</Heading>
                </div>
            </div>
        </Link>
    );
}

export default NewsCard;