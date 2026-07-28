import React from 'react'

const Team = () => {
  return (
    <div className="container mb-5 px-5 pb-5">
      <h3 className="text-center">People</h3>
      <div className="row">
        <div className="col-6 d-flex flex-column gap-3 align-items-center pt-5">
          <img src="media/images/nithinKamath.jpg" className="rounded-circle w-50" />
          <h5 className="fw-medium">Nithin Kamath</h5>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-5 mt-5 px-0 pt-5">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a className="text-decoration-none">Homepage</a> / <a className="text-decoration-none">TradingQnA</a> / <a className="text-decoration-none">Twitter</a></p>
        </div>
      </div>
    </div>
  )
}

export default Team