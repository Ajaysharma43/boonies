import './header.css'
import React from 'react';
import myImage  from '../../assets/image1.png'
import phone from '../../assets/phone.png';
import email from '../../assets/dashicons_email-alt.png';
import body from '../../assets/Ellipse1.png';

function Header(){
    return(
        <>
        <div id="navbar">
            <section id="title">
            <div id="empty"></div>
            <img src={myImage} alt="" id="image"/>
            </section>

            <section id="items">
                <div id="item1">
                    <div id="image-body">
                        
                    <img src={phone} alt="" id="phone" /><br />
                    </div>
                    <div>
                    <p id="text1">Drop A Line</p>
                    <p id="text2">+000 123 456 88</p>
                    </div>
                </div>
                <div id="item2">
                <div>
                    <img src={email} alt="" id="email"/><br />
                    </div>
                    <div>
                    <p id="text3">Email Address</p>
                    <p id="text4">theboonies@gmail.com</p>
                    </div>
                </div>
                <div id="empty"></div>
            </section>
        </div>
        </>
    )
}

export default Header;