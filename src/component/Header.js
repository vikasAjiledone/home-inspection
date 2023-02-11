import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import house from "../images/house 1.png";

const Header = () => {
  return (
    <div className="ml-5 my-3">
      <div className="row">
        <div className="col-md-6 mx-5 my-5">
          <div className="mx-5">
            <h6 className="fs-1">
              Inspecting Your <span className="text-info">Home</span>
            </h6>
            <h6 className="fs-1">
              Protecting Your <span className="text-info">Investment</span>
            </h6>
            <h6 className="text-info fs-1"> House Inspecting Services</h6>
            <p className="my-4">
              House Inspection Services offers thorough and objective home
              inspection to help clients make informed decisions about their
              real estate purchase. We aim to protect clients’ investment by
              providing detailed evaluations and recommendation
            </p>
            <form className="d-flex">
              <button
                className="btn btn-outline-info mx-3 border-3 fw-bolder"
                type="submit"
              >
                Log in
              </button>
              <button
                className="btn btn-info text-light fw-bolder"
                type="submit"
              >
                Get Started Free <BsFillPlayFill className="mx-2 fs-4" />
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-5  bg-info">
          <img src={house} alt="" className="img-fluid-sm mt-5 " />
        </div>
      </div>
    </div>
  );
};

export default Header;
