import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import Heading from "../../components/Heading";
import { PostType } from "../../types/types";

type PostTypeProps = {
    posts: [PostType],
}

const Posts: FC<PostTypeProps> = ({ posts }) => (
    <>
        <Head>
            <title>Ellco | Posts</title>
        </Head>

        <h1>Post Archive Page:</h1>

        { posts && 
            <div className="posts">
                { posts.map(({ id, title, body }) => (
                    <div key={ id }>
                        <Heading tag={'h4'}>
                            <Link href={`posts/${id}`}>{ title }</Link>
                        </Heading>
                        <p>{ body }</p>
                    </div>
                )) }
            </div>
        }

    </>
);

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if ( !data ) {
        return {
            notFound: true
        }
    }

    return {
        props: { posts: data }
    };
}

export default Posts;