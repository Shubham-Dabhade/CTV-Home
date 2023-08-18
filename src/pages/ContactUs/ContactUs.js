import React from 'react';
import "./contactus.css";
import Footer from '../../components/Footer/Footer';

const ContactUs = () => {
  return (
    <>
    <div className="ContactUs">
        <div className="upper-contactus-banner">
            <img src={require("../../assets/contact us@4x-100.jpg")} alt="" className="contactus-banner-img" />
        </div>
        <div className="middle-contactus-blocks">
            <div className="block-set1-contactus">
                <div className="contactus-block-set1-inside">
                    <div className="contactus-block-set1-title">
                    24 HOURS TECHNICAL SUPPORT 
                    </div>
                    <div className="contactus-block-set1-email">
                        demo@email.com
                    </div>
                    <div className="contactus-block-set1-phone">
                        +1865 783 9299
                    </div>
                </div>
                <div className="contactus-block-set1-inside">
                    <div className="contactus-block-set1-title">
                        SALES SUPPORT
                    </div>
                    <div className="contactus-block-set1-email">
                        demo@email.com
                    </div>
                    <div className="contactus-block-set1-phone">
                        +1865 783 9299
                    </div>
                </div>
                <div className="contactus-block-set1-inside">
                    <div className="contactus-block-set1-title">
                        WORK WITH US
                    </div>
                    <div className="contactus-block-set1-email">
                        demo@email.com
                    </div>
                    <div className="contactus-block-set1-phone">
                        +1865 783 9299
                    </div>
                </div>
                <div className="contactus-block-set1-inside">
                    <div className="contactus-block-set1-title">
                        REQUEST QUOTATION
                    </div>
                    <div className="contactus-block-set1-email">
                        demo@email.com
                    </div>
                    <div className="contactus-block-set1-phone">
                        +1865 783 9299
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-contactus-email">
            <div className="contacus-email-title">
                Get Connected
            </div>
            <div className="email-contactus-block">
                <div className="email-contactus-leftblock">
                    <form action="" className="contactus-email">
                        <div className="contact-name">
                            <div className="first-name">
                                <div className="input-block">
                                    <label for="firstname">First Name</label>
                                    <input type="text" id='firstname' className="form-control"/>
                                </div>
                            </div>
                            <div className="last-name">
                                <div className="input-block">
                                    <label for="lastname">Last Name</label>
                                    <input type="text" id='lastname' className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="contact-email">
                            <div className="input-block">
                                <label for="email">Email</label>
                                <input type="email" id='email' className="form-control" placeholder='example@email.com'/>
                            </div>
                        </div>
                        <div className="contact-phone">
                            <div className="input-block">
                                <label for="phone">Phone</label>
                                <input type="text" id='phone' className="form-control"/>
                            </div>
                        </div>
                        <div className="contact-company">
                            <div className="input-block">
                                <label for="company">Company</label>
                                <input type="text" id='company' className="form-control"/>
                            </div>
                        </div>
                        <div className="contact-message">
                            <div className="input-block textarea">
                                <label for="">Drop your message here</label>
                                <textarea rows="5" type="text" className="form-control">Write your message here</textarea>
                            </div>
                        </div>
                        <button type="submit" className='contactus-form-submit'>
                            Send
                        </button>
                    </form>
                </div>
                <div className="email-contactus-right">
                    <div className="contactus-content">
                        <div className="techsupport">
                            <div className="contactus-content-title">
                                24/7 TECH SUPPORT
                            </div>
                            <div className="contactus-content-email">
                                Email: demo@gmail.com
                            </div>
                            <div className="contactus-content-phone">
                                Tel: +4781 892 9035
                            </div>
                        </div>
                        <div className="sales-contactus">
                            <div className="contactus-content-title">
                                SALES
                            </div>
                            <div className="contactus-content-email">
                                Email: demo@gmail.com
                            </div>
                            <div className="contactus-content-phone">
                                Tel: +4781 892 9035
                            </div>
                        </div>
                    </div>
                    <div className="email-contactus-background">
                        <img src={require("../../assets/—Pngtree—business cooperation work negotiation business_3924992.png")} alt="" className="email-contactus-background-img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ContactUs;