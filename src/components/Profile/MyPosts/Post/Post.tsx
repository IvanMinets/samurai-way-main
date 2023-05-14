import React from 'react';
import a from './Post.module.css';

type PostProps = {
    message : string;
    likesCount: number;
}


const Post = (props: PostProps) => {
    return (
        <div>
            <div className={a.item}>
                <img src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3" alt="#"/>
                {props.message}
            </div>
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>

    )
}
export default Post;
