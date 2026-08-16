import React from 'react'
import { Link } from "react-router-dom"
import Navbar from './Navbar';

const NotFound = () => {
  return (
    <div className="container my-5 p-5 text-center">
       <Navbar />
      <div className="row d-flex flex-column gap-3">
        <h3>Page Not Found!</h3>
        <p className="text-muted">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary w-25 m-auto p-2">Go Home</Link>
      </div>
    </div>
  )
}

export default NotFound;