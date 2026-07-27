import React from 'react'

const Awards = () => {
  return (
    <div className="container p-5">
      <div className="row">

        <div className="col-6">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6 mt-5">
          <h1>Largest stock broker in india</h1>
          <p className="py-3">2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
          <div className="row mt-3">
            <div className="col-6">
              <ul>
                <li className="mt-2">Future of options</li>
                <li className="mt-2">Commodity derivatives</li>
                <li className="mt-2">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="mt-2">Stocks and IPOs</li>
                <li className="mt-2">Direct mutual funds</li>
                <li className="mt-2">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" className="w-75 mt-3 mx-3"/>
        </div>
      </div>
    </div>
  )
}

export default Awards