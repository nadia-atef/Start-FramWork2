import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg color py-4 fixed-top">
        <div className="container">
          <NavLink className="navbar-brand font-1 text-white text-decoration-none" to="/">
            START PRAMEWORK
          </NavLink>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link font text-white text-decoration-none${isActive ? ' active' : ''}`
                  }
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link font text-white text-decoration-none${isActive ? ' active' : ''}`
                  }
                  to="/portfolio"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link font text-white text-decoration-none${isActive ? ' active' : ''}`
                  }
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
