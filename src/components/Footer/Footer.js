import React from 'react';
import "./footer.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="custom_footer_container">
        <div className="inside_custom_footer_container">
            <div className="footer_container_top_part">
                <div className="footer_part_1">
                    <div className="footer_company_logo_container">
                        <div className="footer_company_logo">
                            <img src={require("../../assets/Business logo.png")} alt="" className="footer_logo_img" />
                        </div>
                    </div>
                </div>
                <div className="footer_part_2">
                    <div className="footer_quick_links_container">
                        <div className="footer_quick_links_title">
                            Company
                        </div>
                        <div className="footer_quick_links_list">
                            <div className="footer_quick_links"><a href="/aboutus" className='footer_link'>About Us</a></div>
                            <div className="footer_quick_links"><a href="/ourpromise" className='footer_link'>Our Promise</a></div>
                            <div className="footer_quick_links"><a href="/solutions" className='footer_link'>Our Solutions</a></div>
                            <div className="footer_quick_links"><a href="/ouredge" className='footer_link'>Our Edge</a></div>
                            <div className="footer_quick_links"><a href="/ourbrands" className='footer_link'>Our Brands</a></div>
                            <div className="footer_quick_links"><a href="/contactus" className='footer_link'>Contact Us</a></div>
                        </div>
                    </div>
                </div>
                <div className="footer_part_3">
                    <div className="footer_about_company_location_and_contacts">
                            <div className="Contacts_title">
                                Contacts
                            </div>
                            <div className="company_location_contact_container">
                                <LocationOnIcon className="footer_icons" style={{marginRight:"10px"}}/>
                                <div className="company_location">
                                    <div className="company_location_part_1">
                                        Room #225, 1st Floor
                                    </div>
                                    <div className="company_location_part_2">
                                    Harbor View Towers (JM Mall), Samora Avenue
                                    </div>
                                </div>
                            </div>
                            <div className="company_location_contact_container">
                                <CallIcon className="footer_icons" style={{marginRight:"10px"}}/>
                                <div className="company_contact_number">
                                    0675 317 813 / 754 585 781
                                </div>
                            </div>
                            <div className="company_location_contact_container">
                                <EmailIcon className="footer_icons" style={{marginRight:"10px"}}/>
                                <div className="company_contact_email">
                                    info@ctvbusiness.co.tz
                                </div>
                            </div>
                    </div>
                </div>
                <div className="footer_part_4">
                    <div className="footer_socials_container">
                        <div className="footer_socials_title">
                            Stay in the know
                        </div>
                        <div className="footer_socials_links_container">
                            <a href="#" className='footer_socials_links'>
                                <InstagramIcon className="footer_icons"/>
                            </a>
                            <a href="#" className='footer_socials_links'>
                                <LinkedInIcon className="footer_icons"/>
                            </a><a href="#" className='footer_socials_links'>
                                <FacebookIcon className="footer_icons"/>
                            </a><a href="#" className='footer_socials_links'>
                                <TwitterIcon className="footer_icons"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_container_bottom_part">
                © Copyright CTV Business 2023.All Rights Reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer