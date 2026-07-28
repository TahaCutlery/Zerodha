import React from 'react'
import { Link } from "react-router-dom"

const stats = () => {
  return (
    <div className="container p-5 my-5">
      <div
        className="row justify-content-center align-items-center g-2"
      >
        <div className="col">
          <h2 className="mb-5">Trust with confidence</h2>
          <div>
            <h3 className="fs-4">Customer-first always</h3>
            <p className="text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          </div>
          <div>
            <h3 className="fs-4">No spam or gimmicks</h3>
            <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
          </div>
          <div>
            <h3 className="fs-4">The Zerodha universe</h3>
            <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>
          <div>
            <h3 className="fs-4">Do better with money</h3>
            <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
        </div>
        <div className="col-6 mx-5">
          <img src="media/images/ecosystem.png" className="w-100" />
          <div className="mt-5 d-flex justify-content-around w-75 mx-5">
            <div><Link to={""} src="#" className="text-decoration-none">Explore our products <i class="fa-solid fa-arrow-right"></i></Link></div>
            <div><Link to={""} src="#" className="text-decoration-none">Try Kite demo <i class="fa-solid fa-arrow-right"></i></Link></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default stats