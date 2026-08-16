import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { server_url } from "../serverUrl"

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      let response = await fetch(`${server_url}/me`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        localStorage.removeItem("token");
        setUser(null);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => { fetchUser() }, [navigate]);

  return (
    <nav className="navbar navbar-expand-lg border-bottom position-sticky top-0 bg-body" style={{ height: "70px" }}>
      <div className="container px-5 d-flex justify-content-between">
        <div>
          <Link to={"/"} className="navbar-brand w-25">
            <img src="media/images/logo.svg" className="w-25" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex gap-4 px-5">
            {user ? <li className="nav-item">
              <Link to={"/dashboard"} className="nav-link">Dashboard</Link>
            </li> : <li className="nav-item">
              <Link to={"/signup"} className="nav-link">Signup</Link>
            </li>}
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to={"/product"} className="nav-link">Product</Link>
            </li>
            <li className="nav-item">
              <Link to={"/pricing"} className="nav-link">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link to={"/support"} className="nav-link">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar