import React, {useEffect, useState} from 'react'
import { jwtDecode } from "jwt-decode";
import './App.css';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


function App() {

  const [user, setUser] = useState({})


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
  }, [])

  return (
    <div>
      <Helmet>
        <style>{'body { background-color: beige; }'}</style>
      </Helmet>
      <br></br>
      <h1 id = "firstHeading">SBHS Attendence Analytics</h1>
      <br></br>
      

      <div class = "container">
        <br></br>
        <h1 id = "signIn">LOGIN WITH GOOGLE</h1>
        <br></br>
        <div id="signInDiv"></div>
        <div id="signOutDiv" hidden>
        { Object.keys(user).length != 0 &&
          <button id = "signOutButton" onClick={ (e) => handleSignOut(e)}>Sign Out</button>
        }
        {user &&
          <div>
            <img id = "userPicture" src={user.picture}></img>
            <h3 id = "username">{"Welcome " + user.name}</h3>
          </div>
        }
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id = "homePageButtons" class = "btn-group">
        { Object.keys(user).length != 0 &&
        <div>
          <Button id = "returnToHome" variant="outline-light">
          <Link to = '/findtrends'>Find Trends</Link>
        </Button>
        <Button id = "returnToHome" variant="outline-light">
          <Link to = '/searchstudents'>Find Students</Link>
        </Button>
        </div>
        }
      </div>
      </div>

      <br></br>
      <br></br>
    </div>

  )

}

export default App