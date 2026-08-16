import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { server_url } from "../serverUrl";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [userName, setUserName] = useState("");
  const profileRef = useRef(null);
  const navigate = useNavigate();
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
        if (data?.user?.name) {
          setUserName(data.user.name);
        }
      } else {
        localStorage.removeItem("token");
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => { fetchUser() }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const initials = userName
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="menu-container">
      <img src="./media/images/logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link className="text-decoration-none text-black" to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link className="text-decoration-none text-black" to={"/dashboard/orders"}>Orders</Link>
          </li>
          <li>
            <Link className="text-decoration-none text-black" to={"/dashboard/holdings"}>Holdings</Link>
          </li>
          <li>
            <Link className="text-decoration-none text-black" to={"/dashboard/positions"}>Positions</Link>
          </li>
          <li>
            <Link className="text-decoration-none text-black" to={"/dashboard/funds"}>Funds</Link>
          </li>
          <li>
            <Link className="text-decoration-none text-black" to={"/dashboard/apps"}>Apps</Link>
          </li>
        </ul>
        <hr />
        <div className="profile" ref={profileRef} onClick={handleProfileClick}>
          <div className="avatar">{initials || "UZ"}</div>
          <p className="username">{userName}</p>
          {showMenu && (
            <div className="profile-popup">
              <button className="profile-popup__logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;