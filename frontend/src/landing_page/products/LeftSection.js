import React from 'react'
import {Link} from 'react-router-dom'

const LeftSection = ({
  image,
  topic,
  description,
  tryDemo,
  tryDemoURL,
  learnMore,
  learnMoreURL,
  google,
  apple
}) => {
  return (
    <div className="container my-5 p-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-6">
          <img src={image} alt='#' />
        </div>
        <div className="col-5 px-5 d-flex flex-column gap-3 mt-5 p-5">
          <h2>{topic}</h2>
          <p>{description}</p>
          {(tryDemo || learnMore) && <div>
            {tryDemo && <Link to={tryDemoURL} className="text-decoration-none">{tryDemo} <i className="fa-solid fa-arrow-right"></i></Link>}

            {learnMore && <Link to={learnMoreURL} className="mx-5 text-decoration-none">{learnMore} <i className="fa-solid fa-arrow-right"></i></Link>}
          </div>}
          <div className="mt-3">
            <Link to={google}><img src="media/images/googlePlayBadge.svg" alt='#' /></Link>
            <Link to={apple}><img src="media/images/appstoreBadge.svg" className="mx-5" alt='#' /></Link>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default LeftSection