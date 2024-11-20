import React from "react";
import "./Header.css";
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link,Route,Switch } from "react-router-dom";
function Header() {
  return (
        <header>
          <div className="container">
          <div className="row my-3">
        <div className="col col-md-4 title">
          <h1><DocumentScannerOutlinedIcon />D-Notes</h1>
        </div>
        <div className="col col-md-8 nav-col">
          <nav class="navbar navbar-expand-md ">
            <div class="container-fluid justify-content-center ">
              <button
                class="navbar-toggler"
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
                    <Link to={"/"} className="nav-link">
                    <HomeOutlinedIcon />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/services"} className="nav-link">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/aboutus"} className="nav-link">
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
          <Switch>
            <Route exact path="/" Component={Home}></Route>
          </Switch>
        </div>
      </div>
          </div>
        </header>
  );
}
export default Header;
