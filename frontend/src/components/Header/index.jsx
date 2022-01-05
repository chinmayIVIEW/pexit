import React from 'react';
import './Header.css';
import logo from './../../../src/assets/landingpage_img/logo.png';
export default function Header() {
  return (

    <header>

      <nav className="navbar navbar-expand-lg navbar-light nav-bg-color-dev">
        <div className="container-fluid navbar-fixed-top">

          <a className="navbar-brand" href="#">
            <img src={logo} className="img-fluid" />
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon color-primary"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav header-navbar-nav-dev">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <button type="button" className="btn btn-light header-btn-login-dev ">Login</button>

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button type="button" className="btn btn-light header-btn-JoinNow-dev">Join Now</button>
                </a>
              </li>

            </ul>

          </div>


        </div>
      </nav>

    </header>












  );
}





