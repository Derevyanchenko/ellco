import Head from "next/head";
import { MouseEvent } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import List from "../components/List";
import ListItem from "../components/ListItem";
import NewsCard from "../components/NewsCard";
import RateItem from "../components/Rate";
import ServiceCard from "../components/ServiceCard";
import Text from "../components/Text";

// default lists data
const listData = [
    { id: 1, text: 'Предложим лучшую технологию и рассчитаем стоимость прокладки кабеля' },
    { id: 2, text: 'Порекомендуем современное оборудование для покрытия всего дома сигналом' },
    { id: 3, text: 'Порекомендуем современное оборудование для покрытия всего дома сигналом' },
    { id: 4, text: 'Подберём тарифный план под потребности вашей семьи' },
];

const listSmData = [
    { id: 1, text: 'Технология GPON' },
    { id: 2, text: 'Подключение дополнительных услуг' },
];

const listTransparentData = [
    { id: 1, text: 'IPTV до 250 каналов' },
    { id: 2, text: 'Технология GPON' },
    { id: 3, text: 'Подключение дополнительных услуг' },
];

// tariff's demo data
const RatesData = [
    {
        id: 1,
        title: 'Технологии общения. Онлайн',
        speed: 70,
        channels: 250,
        advantages: [
            { id: 1, text: 'IPTV до 250 каналов' },
            { id: 2, text: 'Технология GPON' },
        ],
        price: 800,
        oldPrice: null,
        featured: false,
    },
    {
        id: 2,
        title: 'Технологии развлечения',
        speed: 70,
        channels: 250,
        advantages: [
            { id: 1, text: 'Технология GPON' },
            { id: 2, text: 'Подключение дополнительных услуг' },
        ],
        price: 800,
        oldPrice: 1000,
        featured: false,
    },
    {
        id: 3,
        title: 'Игровой',
        speed: 70,
        channels: 250,
        advantages: [
            { id: 1, text: 'IPTV до 250 каналов' },
            { id: 2, text: 'Технология GPON' },
            { id: 3, text: 'Подключение дополнительных услуг' },
        ],
        price: 800,
        oldPrice: null,
        featured: true,
    },

];

const Home = () => {

    const onClickHandler = (e: MouseEvent) => {
        e.preventDefault();
        console.log('Click');
    }
    return (
        <>
            <div style={{background: '#131313', paddingTop: 40, paddingBottom: 40 }}>
                <Head>
                    <title>UI KIT</title>
                </Head>
                <div className="container mt-30">

                    <div className="row indent-bottom" style={{color: 'white'}}>
                        <div className="col-12">
                            <Heading tag="h1" className="color-sec-green mb-50">Headings:</Heading>
                            <Heading tag="h1">Headline 1 — 60px   |  Medium  |  100%  |  -4%</Heading>
                            <Heading tag="h2">Headline 2 — 50px  |  Medium  |  110%  |  -1% </Heading>
                            <Heading tag="h3">Headline 3 — 24px  |  Medium  |  120%  |  0%</Heading>
                            <Heading tag="h4">Headline 4 — 20 px  |  Medium  |  120%  |  0% </Heading>
                            <Heading tag="h5">Headline 5 — 36px  |  Medium  |  100%  |  -3%</Heading>
                            <Heading tag="h6">Headline 6 — 30px  |  Medium  |  100%  |  -3%</Heading>

                            <Heading
                                tag="h5"
                                hasDecor="true"
                                className="color-blue mt-30 mb-30"
                            >Page title</Heading>
                        </div>
                    </div>
                    <div className="row indent-bottom" style={{color: 'white'}}>
                        <div className="col-lg-12">
                            <Heading tag="h1" className="color-sec-green mb-30">Body text styles:</Heading>

                            <Text type="body-1" className="mb-16">Body 1 — 24px  |  Regular  |  120%  |  0%</Text>
                            <Text type="body-1" className="mb-30" opacity="opacity-5">Body 1 — Light color</Text>
                            <Text type="body-2" className="mb-30">Body 2 — 20px  |  Regular  |  120%  |  0%</Text>
                            <Text type="body-3" className="mb-30">Body 3 — 18px  |  Medium  |  120%  |  0%</Text>
                            <Text type="body-4" className="mb-30">Body 4 — 18px  |  Light  |  120%  |  0%</Text>
                            <Text type="body-5" className="mb-30">Body 5 — 16px  |  Meduim  |  120%  |  0%</Text>
                            <Text type="body-6" className="mb-30">Body 6 — 16px  |  Regular  |  120%  |  0%</Text>
                            <Text type="body-7" className="mb-30">Body 7 — 14px  |  Regular  |  120%  |  0%</Text>
                            <Text type="body-8" className="mb-30">Body 8 — 14px  |  Medium  |  120%  |  0%</Text>
                            <Text type="body-9" className="mb-30">Body 9 — 18px  |  Regular  |  120%  |  0%</Text>
                        </div>
                    </div>

                    <div className="row indent-bottom">
                        <div className="col-lg-12">
                            <Heading tag="h1" className="color-sec-green mb-30">Buttons:</Heading>

                            <Button
                                onClick={(e) => onClickHandler(e)}
                                color="color-black"
                                className="mx-12"
                            >
                                Подключить
                            </Button>

                            <Button
                                href="https:google.com"
                                color="color-white"
                                bg="bg-transparent"
                                className="mx-12"
                            >
                                Подробнее
                            </Button>

                            <Button
                                href="https:google.com"
                                color="color-blue"
                                bg="bg-sec-grey"
                                className="mx-12"
                            >
                                Подробнее
                            </Button>

                        </div>
                        {/* <div className="col-lg-12">
                        <Button 
                            onClick={(e) => onClickHandler(e)}
                            color="color-black" 
                            size="lg"
                        >
                            Btn LG size
                        </Button> 
                        <Button 
                            onClick={(e) => onClickHandler(e)}
                            color="color-black" 
                        >
                            Btn Default size
                        </Button>
                        <Button 
                            onClick={(e) => onClickHandler(e)}
                            color="color-black" 
                            size="md"
                        >
                            Btn MD size
                        </Button>
                        <Button 
                            onClick={(e) => onClickHandler(e)}
                            color="color-black" 
                            size="sm"
                        >
                            Btn SM size
                        </Button>
                        <Button 
                            onClick={(e) => onClickHandler(e)}
                            color="color-black" 
                            size="xs"
                        >
                            Btn XS size
                        </Button>
                        <Button 
                            onClick={(e) => onClickHandler(e)}
                            color="color-black" 
                            size="full"
                        >
                            Btn full size
                        </Button>
                    </div> */}
                    </div>

                    {/* LIST ITEMS */}
                    <div className="row indent-bottom">
                        <div className="col-lg-12">
                            <Heading tag="h1" className="color-sec-green mb-30">List items:</Heading>

                            <Heading tag="h6" className="color-sec-green mb-16">List item default:</Heading>
                            <List
                                data={listData}
                            />

                            <Heading tag="h6" className="color-sec-green mt-30 mb-16">List item SM size:</Heading>
                            <List
                                data={listSmData}
                                size={'sm'}
                            />
                        </div>
                    </div>

                    {/* LIST ITEMS */}
                    <div className="row indent-bottom">
                        <div className="col-lg-12">
                            <Heading tag="h1" className="color-sec-green mb-30">Rate components:</Heading>

                            <div className="row">
                                <div className="col-4">
                                    <Heading tag="h6" className="color-sec-green mb-16">Rate default:</Heading>
                                    <RateItem data={RatesData[0]} />
                                </div>
                                <div className="col-4">
                                    <Heading tag="h6" className="color-sec-green mb-16">Rate 'sale' state:</Heading>
                                    <RateItem data={RatesData[1]} />
                                </div>
                                <div className="col-4">
                                    <Heading tag="h6" className="color-sec-green mb-16">Rate 'featured' state:</Heading>
                                    <RateItem data={RatesData[2]} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row indent-bottom">
                        <div className="col-lg-12">
                            <Heading tag="h1" className="color-sec-green mb-30">Service card:</Heading>

                            <div className="row">
                                <div className="col-5">
                                    <ServiceCard data={{
                                        id: 1,
                                        image: '/img/service-img.jpg',
                                        title: 'Домашний интернет — Технологии общения. Онлайн',
                                        description: 'IPTV до 250 каналов'
                                    }} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row indent-bottom">
                        <div className="col-lg-12">
                            <Heading tag="h1" className="color-sec-green mb-30">News cards:</Heading>

                            <div className="row">
                                <div className="col-3">
                                    <NewsCard data={{
                                        id: 1,
                                        image: '/img/news-img-sm.jpg',
                                        date: '20 апреля 2022',
                                        title: 'Изменение доп. опции «Очень много интернета» в рамках мобильной связи',
                                    }} />
                                </div>
                                <div className="col-3">
                                    <NewsCard data={{
                                        id: 1,
                                        image: '/img/news-img-sm.jpg',
                                        date: '20 апреля 2022',
                                        title: 'Изменение доп. опции «Очень много интернета» в рамках мобильной связи',
                                    }} />
                                </div>
                                <div className="col-3">
                                    <NewsCard data={{
                                        id: 1,
                                        image: '/img/news-img-sm.jpg',
                                        date: '20 апреля 2022',
                                        title: 'Изменение доп. опции «Очень много интернета» в рамках мобильной связи',
                                    }} />
                                </div>
                                <div className="col-3">
                                    <NewsCard data={{
                                        id: 1,
                                        image: '/img/news-img-sm.jpg',
                                        date: '20 апреля 2022',
                                        title: 'Изменение доп. опции «Очень много интернета» в рамках мобильной связи',
                                    }} />
                                </div>
                                <div className="col-12 mt-30">
                                    <NewsCard 
                                        data={{
                                            id: 1,
                                            image: '/img/news-img-sm.jpg',
                                            date: '20 апреля 2022',
                                            title: 'Изменение доп. опции «Очень много интернета» в рамках мобильной связи',
                                        }} 
                                        size="lg"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row indent-bottom">
                        <div className="col-lg-12">
                            <Heading tag="h1" className="color-sec-green mb-30">Balance Item:</Heading>

                            <div className="row">
                                <div className="col-5">
                                    {/* <BalanceItem /> */}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row indent-bottom">
                        <div className="col-lg-12">
                            <Heading tag="h1" className="color-sec-green mb-30">Payment Form:</Heading>

                            <div className="row">
                                <div className="col-5">
                                    <ServiceCard data={{
                                        id: 1,
                                        image: '/img/service-img.jpg',
                                        title: 'Домашний интернет — Технологии общения. Онлайн',
                                        description: 'IPTV до 250 каналов'
                                    }} />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;