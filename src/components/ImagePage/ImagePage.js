import React, { useState, useEffect } from 'react';
import './ImagePage.scss';
import user from '../../assets/user.png';
import arrow from '../../assets/arrow.png'

export default function ImagePage(props) {
    return (
        <div className="imagePage">
            <div className="imagePage_photo">
                <img src={user} alt="Person photo" width="118px" height="118px"/>
            </div>
            <div className="imagePage_firstCaption">
                <span className="imagePage_firstCaption_text">
                    Let's get you set up
                </span>
            </div>
            <div className="imagePage_secondCaption">
                <span className="imagePage-secondCaption_text">
                    It should only take a couple of minutes to pair with your watch
                </span>
            </div>
            <div className="imagePage_button">
                <button className="imagePage_button_content" onClick={() => props.onClick()}>
                    <img src={arrow} alt="arrow" width="8px" height="15px" />
                    Click me!
                </button>
            </div>
        </div>

    );
}