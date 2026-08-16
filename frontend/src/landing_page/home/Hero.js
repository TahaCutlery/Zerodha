import React from 'react'

const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <img src="media/images/homeHero.png" alt="Home Hero" />
      </div>
      <div className="row text-center mt-5">
        <h1>Invest in everything</h1>
        <p className="m-2">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className="btn btn-primary col-2 mx-auto mt-2 fs-5">Sign up for free</button>
      </div>
    </div>
  )
}

export default Hero