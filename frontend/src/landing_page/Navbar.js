import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg border-bottom position-sticky top-0 bg-body" style={{height: "70px"}}>
      <div class="container px-5 d-flex justify-content-between">
        <div>
        <Link to={"/"} class="navbar-brand w-25">
          <img src="media/images/logo.svg" className="w-25"/>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav d-flex gap-4 px-5">
            <li class="nav-item">
              <Link to={"/signup"} class="nav-link" aria-current="page">Signup</Link>
            </li>
            <li class="nav-item">
              <Link to={"/about"} class="nav-link">About</Link>
            </li>
            <li class="nav-item">
              <Link to={"/product"} class="nav-link">Product</Link>
            </li>
            <li class="nav-item">
              <Link to={"pricing"} class="nav-link">Pricing</Link>
            </li>
            <li class="nav-item">
              <Link to={"support"} class="nav-link">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar