import React from 'react'

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
          <a className="text-decoration-none">{learnMore} <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-6">
          <img src={image} className="" />
        </div>
      </div>
    </div>
  )
}

export default RightSection