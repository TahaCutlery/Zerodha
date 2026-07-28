import React from 'react'

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
          <img src={image} />
        </div>
        <div className="col-5 px-5 d-flex flex-column gap-3 mt-5 p-5">
          <h2>{topic}</h2>
          <p>{description}</p>
          {(tryDemo || learnMore) && <div>
            {tryDemo && <a href={tryDemoURL} className="text-decoration-none">{tryDemo} <i className="fa-solid fa-arrow-right"></i></a>}

            {learnMore && <a href={learnMoreURL} className="mx-5 text-decoration-none">{learnMore} <i className="fa-solid fa-arrow-right"></i></a>}
          </div>}
          <div className="mt-3">
            <a href={google}><img src="media/images/googlePlayBadge.svg" /></a>
            <a href={apple}><img src="media/images/appstoreBadge.svg" className="mx-5" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection