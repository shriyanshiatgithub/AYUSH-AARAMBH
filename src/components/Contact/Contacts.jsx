import React from 'react';
import './Contacts.css';

import { MdMessage, MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "5c838e70-88fc-4052-93a7-2cd879472152");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact' id='contact'>
            <div className="contact-col">
                <h3>
                    Send Us a Message <MdMessage />
                    </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quisquam! Porro quae saepe accusantium fugiat, in sint blanditiis facilis voluptatem at ipsam odit nam sed sequi minima cupiditate corrupti temporibus iure esse tenetur asperiores deserunt ipsum. Laborum, cupiditate officia? Laudantium?</p>
                <ul>
                    <li><MdEmail size={20} />Ayushaarambh@gmail.com</li>
                    <li><MdLocalPhone size={20} />+91-xxxxxxxxxx</li>
                    <li><MdLocationOn size={20} />Ministry of Ayush Ayush Bhawan, B-Block, GPO Complex, INA, New Delhi-110023</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>YOUR NAME</label>
                    <input type="text" name='name' placeholder='ENTER YOUR NAME' required />
                    <label>PHONE NUMBER</label>
                    <input type="tel" name='phone' placeholder='ENTER YOUR MOBILE NUMBER' required />
                    <textarea name="message" rows="6" placeholder='ENTER YOUR MESSAGE' required></textarea>
                    <button type='submit' className='btn dark-btn'>SUBMIT NOW </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
