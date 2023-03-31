import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactForm from "../../components/contact-form/contact-form.component";
import ContactItem from "../../components/contact-item/contact-item.component";
import { ContactWrapper, StyledContainer, StyledHeader } from "./contact.styles";

const Contact = () => {
    return (

        <StyledContainer>
            <StyledHeader>contact</StyledHeader>
                <ContactWrapper>
                    <div className="left">
                        <ContactItem 
                            icon={<MdLocalPhone/>}
                            text="954-647-8339"
                        />
                        <ContactItem
                            icon={<MdEmail/>}
                            text="cris.echeguren@gmail.com"    
                        />
                        <ContactItem 
                            text="Gainesville, FL"
                        />
                    </div>
                    <div className="right">
                        <ContactForm/>
                    </div>
                </ContactWrapper>
                <div className="socialWrapper">
                    <Link to="https://github.com/crisecheguren" target='_blank'>
                        <FaGithub className='socialMediaBtn'/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/crisecheguren/" target="_blank">
                        <FaLinkedin className='socialMediaBtn'/>
                    </Link>
                    <Link to="https://www.youtube.com/channel/UCbM9B6NScahVeBjXBVe2ZIQ" target="_blank">
                        <FaYoutube className='socialMediaBtn'/>
                    </Link>
                </div>    
        </StyledContainer>
        

    );
};

export default Contact;