import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import PostInfo from "../../components/PostInfo";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await response.json();

    if ( !data ) return { notFound: true }

    return {
        props: {
            post: data
        }
    }
}


const Post = ({post}) => {

    return (
        <>
            <Head>
                <title>Ellco | Post</title>
            </Head>
            <PostInfo post={post} />
        </>
    );
}

export default Post;