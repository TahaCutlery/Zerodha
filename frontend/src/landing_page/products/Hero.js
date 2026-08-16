import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className="container my-5 p-5 text-center border-bottom">
      <h3>Zerodha Products</h3>
      <h5 className="text-muted mt-3">Sleek, modern, and intuitive trading platforms</h5>
      <p className="mt-4 mb-5">Check out our <Link className="text-decoration-none">investment offerings →</Link></p>
    </div>
  )
}

export default Hero