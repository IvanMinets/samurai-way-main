import React from 'react';
import preloader from "../../../assets/images/oval.svg";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} style={{height: '70px'}} alt='#'/>
        </div>
    );
};

export default Preloader;