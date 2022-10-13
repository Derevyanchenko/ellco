import Heading from "./Heading";
import { PostType } from "../types/types";
import { FC } from "react";

type PostInfoProps = {
    post: PostType
}

const PostInfo: FC<PostInfoProps> = ({ post }) => {
    const { title, body } = post || {};

    if ( !post ) {
        return <Heading tag={'h3'}>Empty Post</Heading>
    }

    return (
        <>
            <Heading tag='h3'>{title}</Heading>
            <p>{ body }</p>
        </>
    );
}

export default PostInfo;