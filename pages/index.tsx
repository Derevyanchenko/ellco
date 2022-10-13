import Head from "next/head";
import Heading from "../components/Heading";


const Home = () => {
    return (
        <>
            <Head>
                <title>Ellco | Homepage</title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Heading tag="h1">Headline 1 — 60px   |  Medium  |  100%  |  -4%</Heading>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;