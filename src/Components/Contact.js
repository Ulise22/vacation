import React from "react";
import './Contact.css';

const Contact = () => {
    return(
        <div name="contact" className="container">
            <div className="contact">
                <h2>You can leave us a Message to contact with us</h2>

                <form>
                    <div className="contact__inputs">

                        <input type="text" placeholder="Name..." />
                        <input type="email" placeholder="Mail..." />
                    </div>
                    <div className="contact__msg">
                        <textarea cols="60" rows="12" placeholder="Message" />
                    </div>
                    <div>
                        <button className="btn">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;