import React from 'react'
import {Link} from 'react-router-dom'

const RightSection = ({
  image,
  topic,
  description,
  learnMore
}) => {
  return (
    <div className="container my-5 p-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4 d-flex flex-column gap-3 mt-5 p-5 justify-content-center">
          <h2 className="text-muted">{topic}</h2>
          <p className="text-muted">{description}</p>
          <Link className="text-decoration-none">{learnMore} <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
        <div className="col-6">
          <img src={image} className="" alt='#' />
        </div>
      </div>
    </div>
  )
}

export default RightSection