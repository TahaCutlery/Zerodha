import React from 'react'
import { Link } from "react-router-dom"

const Pricing = () => {
  return (
    <div className="container p-5 my-5">
      <div className="row">
        <div className="col-4 d-flex flex-column gap-2">
          <h3 className="fw-semibold">Unbeatable pricing</h3>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <Link to={""} src="#" className="text-decoration-none">See pricing <i className="fa-solid fa-arrow-right justify-content-center align-middle"></i></Link>
        </div>
        <div className="col-7 d-flex justify-content-around mx-5 mt-5">
            <div className="col d-flex h-75">
              <img src="media/images/pricing-eq.svg" className="w-50"/>
              <p className="mt-3">Free account opening</p>
            </div>
            <div className="col d-flex h-75">
              <img src="media/images/pricing-eq.svg" className="w-50"/>
              <p className="mt-3">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col d-flex h-75">
              <img src="media/images/other-trades.svg" className="w-50"/>
              <p className="mt-3">Intraday and F&O</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Pricing