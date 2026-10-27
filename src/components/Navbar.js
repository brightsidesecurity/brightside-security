import React, { useState } from "react";
import NavbarContainer from "./NavbarContainer";
import { Link } from "./../util/router.js";
import { useAuth } from "./../util/auth.js";

function Navbar(props) {
  const auth = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="header-inner d-lg-flex align-items-center">
        <div className="logo-outer d-flex align-items-center">
              
            <div className="logo">
              <Link to="/">
                <img className="image" src={props.logo} alt="bright-side-security-private-security-officers-in-fremont-california" />
              </Link>
            </div>
        </div>
        <div className="nav-outer clearfix ml-lg-auto ml-auto">
            
            <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header clearfix">
                    
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                        <li className="current"><a href="#">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        {/* <li><a href="#services">services</a>
                        </li> */}
                        <li><a href="#testimonials">Testimonials</a>
                        </li>
                        <li><a href="#media">Media</a>
                        </li>
                        
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div id="blink" className="contact-number">
                        <a id="blinkText" href="tel:5103961974" className="phone-bumber">510-396-1974</a>
                    </div>
                </div>
            </nav>
            
        </div>
    </div>
      {/* <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img className="image" src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            {auth.user && (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/">
                  Account
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link className="navbar-item" to="/dashboard">
                    Dashboard
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/signout"
                    onClick={e => {
                      e.preventDefault();
                      auth.signout();
                    }}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}

            {!auth.user && (
              <Link className="navbar-item" to="/signin">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div> */}
    </NavbarContainer>
  );
}

export default Navbar;
