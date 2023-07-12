import React from 'react';

type ProfileStatusPropsType = {

}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    return (
        <div>
            <span>{props.status}</span>
        </div>
    );
};

export default ProfileStatus;