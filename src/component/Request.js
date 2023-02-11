import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Request = () => {
  return (
    <div className="container border border-info border-3 px-5 py-4 bg-light request rounded-3 my-5">
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-info">Discover the Expertise Behind</h3>
          <h3 className="text-info">House Inspection Services</h3>
          <p>By Your Trusted Home Inspection Partner</p>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <button type="submit" className="btn btn-info text-light fs-5 rounded-3">
            REQUEST INSPECTION <BsFillPlayCircleFill className="mx-2 fs-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Request;
