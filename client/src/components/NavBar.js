import React from 'react'
import {Navbar, Nav, Container, FormSelect} from "react-bootstrap"
import {Helmet} from "react-helmet"
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function NavBar(){
  return (
    <div>
        <Navbar id = "Navbar" bg="dark" data-bs-theme="dark">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                  <Helmet>
              <style>{'body { background-color: lightblue; }'}</style>
              </Helmet>

              <h1 id = "InitialHeading">SBHS Attendence Analytics</h1>
              </li>
          </ul>
        </div>
        <div>
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Button id = "returnToHome" variant="outline-light">
                  <Link to = '/findtrends'>Find Trends</Link>
                </Button>
              </li>
              <li class="nav-item active">
                <Button id = "returnToHome" variant="outline-light">
                  <Link to = '/searchstudents'>Find Students</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default NavBar