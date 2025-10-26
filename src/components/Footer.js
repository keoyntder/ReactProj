import "./FooterStyles.css";

import { FaHome, FaMailBulk, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society.</p>
              <p>Philippines.</p>
            </div>
          </div>

          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            091 2345 6789
            </h4>
          </div>

          
          <div className="phone">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            kentmiken@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>This is me Kent Vincent Miken. I am a BSIT student at Tarlac Agricultural University - Main Campus. 
            I am currently learning web development and this is my first ReactJS project.</p>
          <div className="social">
          <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;