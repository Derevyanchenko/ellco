import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);

    return (
        <>
            <Head>
                <title>Ellco | 404</title>
            </Head>
            <h1>404 page</h1>
            <p>Something went wrong...</p>
        </>
    );
}

export default NotFound;