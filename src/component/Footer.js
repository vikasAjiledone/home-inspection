import React from "react";
import Socials from "./Socials";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-info text-light mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5">
            <h6 className="text-dark fw-bolder">Home Inspection Agency</h6>
            <p>
              House Inspection Services offers thorough and objective home
              inspections to help clients make informed decisions about their
              real estate purchases. We aim to protect clients' investments by
              providing detailed evaluations and recommendations.
            </p>
          </div>
          <div className="col-md-4 mt-5 text-center">
            <h6 className="text-dark fw-bolder">Company</h6>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="">
                  Rates
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="">
                  FAQs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mt-5 text-center">
            <h6 className="text-dark fw-bolder">Reach Us On</h6>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="">
                  <HiLocationMarker />
                  Toronto
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="">
                  <BsFillTelephoneFill />
                  +012-34 567 890
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="">
                  <GrMail />
                  Example@example
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
