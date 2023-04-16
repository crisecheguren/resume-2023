import React, { useState, useRef } from 'react';
import FormInput from '../form-input/form-input.component';
import FormTextArea from '../form-text-area/form-text-area.component';
import { StyledForm } from './contact-form.styles';
import emailjs from '@emailjs/browser';


const defaultFormValues = {
    from_name: '',
    from_email: '',
    message: '',
};

const ContactForm = () => {
    const form = useRef();
    const [formValues, setFormValues] = useState(defaultFormValues);
    const [submissionStatus, setSubmissionStatus] = useState('idle');
    const { from_name, from_email, message } = formValues;
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };



    
    
    const sendEmail = (e) => {
        e.preventDefault();
        setSubmissionStatus('sending');
        emailjs.sendForm('service_y5g37gj', 'template_xl6drmj', form.current, 'VHb-0u_SOqF9x3T9a')
          .then((result) => {
              console.log(result.text);
              setSubmissionStatus('success');
          }, (error) => {
              console.log(error.text);
              setSubmissionStatus('error');
          });

          form.current.reset();
          setFormValues(defaultFormValues);
      };

    
      const renderSubmissionMessage = () => {
        switch (submissionStatus) {
            case 'sending':
                return <p>Sending...</p>;
            case 'success':
                return <p>Your message was successfully sent!</p>;
            case 'error':
                return <p>There was an error sending your message. Please try again.</p>;
            default:
                return null;
        }
    };
      


    return (
        <div>
            <StyledForm ref={form} onSubmit={sendEmail}>
                <div>
                <FormInput type="text" name="from_name" label="Name" onChange={handleChange} value={from_name} required/>
                <FormInput type="text" name="from_email" label="Email" onChange={handleChange} value={from_email} required/>
                <FormTextArea type="text" name="message" label="Type a message..." onChange={handleChange} value={message} required/>
                </div> 
                <button type='submit'>Send</button>         
            </StyledForm>
            {renderSubmissionMessage()}
        </div>
    );
};

export default ContactForm;