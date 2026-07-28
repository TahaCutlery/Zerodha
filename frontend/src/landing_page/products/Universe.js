import React from 'react'

const Universe = () => {
  return (
    <div className="container mt-5 p-5 text-center">
      <h2>The Zerodha Universe</h2>
      <p className="text-muted mt-3">Extend your trading and investment experience even further with our partner platforms</p>
      <div className="row mt-4">
        <div className="col-4 px-5">
          <div className="pt-5 px-5 mb-5">
            <img src="media/images/zerodhaFundhouse.png" className="w-75" />
            <p className="text-muted mt-3" style={{ fontSize: "0.7rem" }}>Our asset management venture
              that is creating simple and transparent index
              funds to help you save for your goals.</p>
          </div>
          <div className="pt-5 px-5 mb-5">
            <img src="media/images/streakLogo.png" className="w-75" />
            <p className="text-muted mt-3" style={{ fontSize: "0.7rem" }}>Systematic trading platform
              that allows you to create and backtest
              strategies without coding.</p>
          </div>
        </div>
        <div className="col-4 px-5">
          <div className="pt-5 px-5 mb-5">
            <img src="media/images/sensibullLogo.svg" className="w-75" />
            <p className="text-muted mt-3" style={{ fontSize: "0.7rem" }}>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
          </div>
          <div className="pt-5 px-5 mb-5">
            <img src="media/images/smallcaseLogo.png" className="w-75" />
            <p className="text-muted mt-3" style={{ fontSize: "0.7rem" }}>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
          </div>
        </div>
        <div className="col-4 px-5">
          <div className="pt-5 px-5 mb-5">
            <img src="media/images/goldenpiLogo.png" className="w-75" />
            <p className="text-muted mt-3" style={{ fontSize: "0.7rem" }}>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
          </div>
          <div className="pt-5 px-5 mb-5">
            <img src="media/images/dittoLogo.png" className="w-75" />
            <p className="text-muted mt-3" style={{ fontSize: "0.7rem" }}>Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free</p>
          </div>
        </div>
        <div className="text-center mb-5">
        <button className="btn btn-primary w-25 fs-5">Sign up for free</button>
        </div>
      </div>
    </div>
  )
}

export default Universe