import { AppProps } from 'next/app';
import Head from 'next/head';
import MainLayout from '../components/MainLayout';
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <MainLayout>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,500&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
    </MainLayout>
);

export default MyApp
