import React from 'react'
import App from '../App'
import {Navbar, Nav, Container, FormSelect} from "react-bootstrap"
import {Helmet} from "react-helmet"
import Dropdown from "react-bootstrap/Dropdown";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


function findTrends(){
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
                  <Link to = '/'>Return To Home</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default findTrends