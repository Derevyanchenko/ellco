/*----------  Rate type ----------*/
export interface IRate {
    id: number;
    title: string;
    speed?: number | string;
    channels?: number | string;
    advantages?: ListItemProps[];
    price?: number | string;
    oldPrice?: number | string | null;
    featured?: boolean;
}

/*----------  Service Card type ----------*/
export interface IServiceCard {
    id: number;
    image: string;
    title: string;
    description: string;
}

/*----------  News Card interface ----------*/
export interface INewsCard {
    id: number;
    image: string;
    date: string;
    title: string;
}

/*----------  Demo types for API test ----------*/
export type PostType = {
    id: string,
    title: string,
    body: string,
}


export type AdressType = {
    city: string,
}

export type ContactType = {
    id? : string,
    name: string,
    email: string,
    address: AdressType
}


/*----------  List types ----------*/
export type ItemSize = 'sm';

export interface ListItemProps {
    id?: number;
    text?: string;
    className?: string;
    children?: React.ReactNode;
    size?: ItemSize;
}

/*----------  Color type ----------*/
export type ColorType = 'color-blue' 
                    | 'color-white' 
                    | 'color-yellow' 
                    | 'color-black' 
                    | 'color-sec-green'
                    | 'color-sec-grey'
                    | 'color-sec-light-grey'
                    | 'color-sec-dark-grey'
                    | 'color-sec-light-blue'
                    | 'color-sec-dark-blue';

export type BackgroundType = 'color-blue' 
                    | 'bg-white' 
                    | 'bg-yellow' 
                    | 'bg-black' 
                    | 'bg-transparent' 
                    | 'bg-sec-green'
                    | 'bg-sec-grey'
                    | 'bg-sec-light-grey'
                    | 'bg-sec-dark-grey'
                    | 'bg-sec-light-blue'
                    | 'bg-sec-dark-blue';