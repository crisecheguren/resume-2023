import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import FormTextArea from '../form-text-area/form-text-area.component';
import { StyledForm } from './contact-form.styles';


const defaultFormValues = {
    displayName: '',
    email: '',
    message: '',
};




const ContactForm = () => {
    const [formValues, setFormValues] = useState(defaultFormValues);
    const { displayName, email, message } = formValues;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };



    return (
        <div>
            <StyledForm>
                <div>
                <FormInput type="text" name="displayName" label="Your Name" onChange={handleChange} value={displayName} required/>
                <FormInput type="text" name="email" label="Your Email" onChange={handleChange} value={email} required/>
                <FormTextArea type="text" name="message" label="Your Message" onChange={handleChange} value={message} required/>
                </div> 
                <button type='submit'>Send</button>         
            </StyledForm>
        </div>
    );
};

export default ContactForm;