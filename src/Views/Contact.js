import React from 'react';
import PageHeader from '../Components/PageHeader';
import BottomBar from '../Components/BottomBar';
import '../css/contact.css';

export default function Contact(props) {
    // old link: action="https://usebasin.com/f/b05ad7051801"
    return (
        <div className="screen">
            <PageHeader title={'Contact Me'} />
            <form className="contact-form content-fade fadeIn" name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <span className="contact-instr" style={{ textAlign: 'left' }}>
                    I'd prefer if you contacted me through&nbsp;
                    <a href="https://www.linkedin.com/in/rayyan-k-16a63b106/"><span style={{ fontWeight: 'bold', color: 'white', textDecoration: 'underline' }}>LinkedIn</span></a>.
                    If you'd like to contact me some other way, just fill out this form.
              </span>
                <input
                    className="contact-input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                />
                <input
                    className="contact-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Enter message here..."
                    required
                />
                <button 
                    className="plain-button form-button" 
                    type="submit"
                    id="contact-submit"
                >Submit</button>
            </form>
            <BottomBar 
                leftButton={{
                    text: 'About',
                    onPress: () => props.setCurrentScreen('about')
                }}
                middleButton={{ 
                    text: 'Home', 
                    onPress: () => props.setCurrentScreen('home') 
                }} />
        </div>
    )
}