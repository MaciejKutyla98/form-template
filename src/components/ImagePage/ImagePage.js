import React, { useState, useEffect } from 'react';
import './ImagePage.scss';

export default function ImagePage(props) {
    return (
        <div className="imagePage">
            <div className="imagePage_photo">

            </div>
            <div className="imagePage_firstCaption">
                <span className="imagePage_firstCaption_text">
                    Let's get you set up
                </span>
            </div>
            <div className="imagePage_secondCaption">
                <span className="imagePage-secondCaption_text">
                    It's should only take a couple of minutes to pair with your watch
                </span>
            </div>
            <div className="imagePage_button">
                <button className="imagePage_button_content">
                    Click me!
                </button>
            </div>
        </div>

    );
}