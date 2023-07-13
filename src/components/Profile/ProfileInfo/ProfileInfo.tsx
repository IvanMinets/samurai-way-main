import React from 'react';
import a from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

type ProfileInfoPropsType = {
    profile: any
    status: any
    updateStatus: any
}


const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    /!*<img*!/*/}
            {/*    /!*    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'*!/*/}
            {/*    /!*    alt='#'/>*!/*/}
            {/*</div>*/}
            <div className={a.descriptionBlock}>
                <img src={props.profile.photos.large} alt='#'/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;
