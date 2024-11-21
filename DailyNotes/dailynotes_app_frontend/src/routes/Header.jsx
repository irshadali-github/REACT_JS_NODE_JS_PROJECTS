import React from "react";
import "./Header.css";
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from "react-router-dom";
function Header() {
  return (
        <header>
          <div className="container">
          <div className="row header-row my-3">
        <div className="col col-md-4 title">
          <h1><DocumentScannerOutlinedIcon />D-Notes</h1>
        </div>
        <div className="col col-md-8 nav-col">
          <nav className="navbar navbar-expand-md ">
            <div className="container-fluid justify-content-center ">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to={"/home"} className="nav-link">
                    <HomeOutlinedIcon />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/notes"} className="nav-link">
                      Notes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/about"} className="nav-link">
                      AboutUs
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to={"/signin"} className="nav-link">
                      SignIn
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to={"/signup"} className="nav-link">
                      SignUp
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
          </div>
        </header>
  );
}
export default Header;
