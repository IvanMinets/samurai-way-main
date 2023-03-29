import React from 'react';
import a from './Profile.module.css';

const Profile = () => {
    return (
            <div className={a.content}>
                <div>
                    <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='#'/>
                </div>
                <div className={a.item}>
                    ava + description
                </div>
                <div  className={a.item}>
                    My posts
                </div>
                    <div className={a.item}>
                        New Post
                    </div>
                    <div className={a.item}>
                        Post 1
                    </div>
                    <div className={a.item}>
                        Post 2
                    </div>
                </div>
    )
}
export default Profile;
