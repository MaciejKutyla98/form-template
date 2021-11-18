import React, { useState, useEffect } from 'react';
import './Form.scss';
import female from '../../assets/female.png'
import male from '../../assets/male.png'
import card from "../../assets/card.png";

export default function Form(props) {
    return (
        <div className="form">
            <div className="form_name">
                <span className="form_name_text">
                    Name
                </span>
                <div className="form_name_input">
                    <input type="text"
                           className="form_name_input_content"
                           placeholder="Type your name"
                    />
                </div>
            </div>

            <div className="form_gender">
                <span className="form_gender_text">
                    Gender
                </span>
                <div className="form_gender_buttons">
                    <label>
                        <img src={male} alt="male" width="20px" height="20px" className="form_gender_buttons_male"/>
                        <input type="radio" value="Male" className="gender" id="male"/> Male
                    </label>
                    <label>
                        <img src={female} alt="female" width="20px" height="20px" className="form_gender_buttons_female"/>
                        <input type="radio" value="Female" className="gender" id="female" /> Female
                    </label>
                </div>
            </div>

            <div className="form_email">
                <span className="form_email_text">
                    Email
                </span>
                <div className="form_email_input">
                    <input type="text"
                           className="form_email_input_content"
                           placeholder="Type your email"
                    />
                </div>
            </div>


            <div className="form_mobile">
                <span className="form_mobile_text">
                    Mobile
                </span>
                <div className="form_mobile_input">
                    <input type="text"
                           className="form_mobile_input_content"
                           placeholder="Type your phone number"
                    />
                </div>
            </div>

            <div className="form_customerID">
                <span className="form_customerID_text">
                    Customer ID
                </span>
                <div className="form_customerID_input">
                    <input type="text"
                           className="form_customerID_input_content"
                           placeholder="Type your customer ID"
                    />
                </div>
            </div>

            <div className="form_membership">
                <span className="form_membership_text">
                    Membership
                </span>
                <div className="form_membership_buttons">
                    <label>
                        <img src={card} alt="card" width="20px" height="20px" className="form_membership_buttons_img"/>
                        <input type="radio" value="Classic" className="membership" id="classic"/> Classic
                    </label>
                    <label>
                        <img src={card} alt="card" width="20px" height="20px" className="form_membership_buttons_img"/>
                        <input type="radio" value="Silver" className="membership" id="silver" /> Silver
                    </label>
                    <label>
                        <img src={card} alt="card" width="20px" height="20px" className="form_membership_buttons_img"/>
                        <input type="radio" value="Gold" className="membership" id="gold"/> Gold
                    </label>
                </div>
            </div>

            <div className="form_buttons">
                <button className="form_buttons_cancel">
                    Cancel.
                </button>
                <button className="form_buttons_save">
                    Save.
                </button>
            </div>
        </div>
    );
}