import React, {useEffect, useState} from 'react'
import { jwtDecode } from "jwt-decode";
import './App.css';
import {Navbar, Nav, Container} from "react-bootstrap"
import {Helmet} from "react-helmet"


function App() {

  const [user, setUser] = useState({})
  // module.exports = { user };

  const [backendData, setBackendData] = useState([{}])

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: "+response.credential)
    var userObject = jwtDecode(response.credential)
    console.log(userObject)
    setUser(userObject)
    document.getElementById("signInDiv").hidden = true
    document.getElementById("signOutDiv").hidden = false
  }

  function handleSignOut() {
    setUser({});
    document.getElementById("signInDiv").hidden = false
    document.getElementById("signOutDiv").hidden = true
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "281737967662-u1vbtb5gfano89kkl8e1j6f310d6o508.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large", }
    )

    google.accounts.id.prompt()

    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                  <Helmet>
              <style>{'body { background-color: lightblue; }'}</style>
              </Helmet>

              <h1 id = "InitialHeading"> SBHS Attendance Analytics </h1>
              </li>
          </ul>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <div id="signInDiv"></div>
                  <div id="signOutDiv" hidden>
                  { Object.keys(user).length != 0 &&
                    <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
                  }
                  {user &&
                    <div>
                      <img src={user.picture}></img>
                      <h3 color='white'>{user.name}</h3>
                    </div>
                  }
                  </div>
                </li>
            </ul>
        </div>
      </Navbar>

      {(typeof backendData.users == 'undefined') ? (
        <p>Loading ...</p>
      ): (
        backendData.users.map((user,i) => (
          <p key = {i} >{user}</p>
        ))
      )}
    </div>
  )
}

export default App