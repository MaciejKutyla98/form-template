import React, { useState, useEffect } from 'react';
import './FormWrapper.scss';
import Form from "../Form/Form";

export default function FormWrapper(props) {
    return (
        <div className="formWrapper_Form">
            <Form />
        </div>
    );
}