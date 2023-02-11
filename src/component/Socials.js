import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


const Socials = () => {
  return (
    <div className="bg-info">
    <div className="social_media d-flex align-items-center justify-content-between container py-4">
      <div className="logo" >Home Inspections</div>
      <div className="media" >
        <FaFacebookF />
        <BsTwitter className="mx-3"/>
        <BsInstagram />
        <BsLinkedin className="mx-3"/>
      </div>
      <div className="term-condiation" >
        <span>Terms and Condition </span>
        <span>Privacy Policy</span>
      </div>
    </div>
    </div>
  );
};

export default Socials;
