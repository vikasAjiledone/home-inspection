import React from 'react'

const Booking = () => {
  return (
    <div className="container border border-info border-3 px-5 py-4 bg-light request rounded-3 my-5">
      <div className="row">
        <div className="col-md-6">
          <p className='text-info'>“Uncover the Skilled Team at House Inspection Services -</p>
          <p className='fs-3'>Your Reliable Home Inspection Advisor”</p>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <button type="submit" className="btn btn-info text-light fs-6 rounded-3">
            CALL US TO BOOK INSPECTION
          </button>
        </div>
      </div>
    </div>
  )
}

export default Booking