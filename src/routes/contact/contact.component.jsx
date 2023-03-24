import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactItem from "../../components/contact-item/contact-item.component";
import { StyledHeader } from "./contact.styles";

const Contact = () => {
    return (
        <div>
            <StyledHeader>contact</StyledHeader>
            <div>
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
                contact form
                </div>
            </div>
        </div>
    );
};

export default Contact;