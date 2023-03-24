import React from 'react';
import { MdPlace } from 'react-icons/md';
import { ItemStyles } from './contact-item.styles';

const ContactItem = ({
    icon= <MdPlace></MdPlace>,
    text="info text",
}) => {
    
    return (
        <ItemStyles>
            <div className="icon">{icon}</div>
            <div className="info">
                <p>{text}</p>
            </div>
        </ItemStyles>
    );
};

export default ContactItem;