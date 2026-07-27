import React from 'react'

const Education = () => {
  return (
    <div className="container p-5 my-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" />
        </div>
        <div className="col-5 d-flex flex-column gap-4 mt-5 mx-5">
          <h3>Free and open market education</h3>
          <div>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <div>
              <a className="text-decoration-none">Varsity <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div>
            <p>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
            <div>
              <a className="text-decoration-none">Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education