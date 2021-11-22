import React, { useState, useEffect } from 'react';
import './Form.scss';
import female from '../../assets/female.png'
import male from '../../assets/male.png'
import card from "../../assets/card.png";
import * as yup from 'yup';
import {formSchema} from "../../validations/FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function Form(props) {
        const { register, handleSubmit, errors } = useForm({
            resolver: yupResolver(formSchema)
        });

        const submitForm = (data) => {
            console.log(data);
        };

    return (
        <div className="form">
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="form_name">
                <span className="form_name_text">
                    Name
                </span>
                    <div className="form_name_input">
                        <input type="text"
                               className="form_name_input_content"
                               placeholder="Type your name"
                               ref={register}
                        />
                    </div>
                </div>

                <div className="form_gender">
                <span className="form_gender_text">
                    Gender
                </span>
                    <div className="form_gender_buttons">
                        <label className="form_gender_buttons_label">
                            <input type="radio" value="Male" name="gender" id="male"/> Male
                            <img src={male} alt="male" width="20px" height="20px" className="form_gender_buttons_male"/>
                        </label>
                        <label className="form_gender_buttons_label">
                            <input type="radio" value="Female" name="gender" id="female" /> Female
                            <img src={female} alt="female" width="20px" height="20px" className="form_gender_buttons_female"/>
                        </label>
                    </div>
                </div>

                <div className="form_dateOfBirth">
                <span className="form_dateOfBirth_text">
                    Date of Birth
                </span>
                    <div className="form_dateOfBirth_input">
                        <input type="text"
                               className="form_dateOfBirth_input_content"
                               placeholder="01/02/1983"
                               ref={register}
                        />
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
                               ref={register}
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
                               ref={register}
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
                               ref={register}
                        />
                    </div>
                </div>

                <div className="form_membership">
                <span className="form_membership_text">
                    Membership
                </span>
                    <div className="form_membership_buttons">
                        <label className="form_membership_buttons_label">
                            <input type="radio" value="Classic" name="membership" id="classic"/> Classic
                            <img src={card} alt="card" width="20px" height="20px" className="form_membership_buttons_img"/>
                        </label>
                        <label className="form_membership_buttons_label">
                            <input type="radio" value="Silver" name="membership" id="silver" /> Silver
                            <img src={card} alt="card" width="20px" height="20px" className="form_membership_buttons_img"/>
                        </label>
                        <label className="form_membership_buttons_label">
                            <input type="radio" value="Gold" name="membership" id="gold"/> Gold
                            <img src={card} alt="card" width="20px" height="20px" className="form_membership_buttons_img"/>
                        </label>
                    </div>
                </div>

                <div className="form_buttons">
                    <button className="form_buttons_cancel">
                        Cancel.
                    </button>
                    <button className="form_buttons_save" type="submit">
                        Save.
                    </button>
                </div>
            </form>
        </div>
    );
}