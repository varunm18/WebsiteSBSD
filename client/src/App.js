import React, {useEffect, useState} from 'react'
import { jwtDecode } from "jwt-decode";
import {Helmet} from 'react-helmet';
import './App.css';

function App() {

  const [user, setUser] = useState({})

  const [backendData, setBackendData] = useState([{}])

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: "+response.credential)
    var userObject = jwtDecode(response.credential)
    console.log(userObject)
    setUser(userObject)
    document.getElementById("signInDiv").hidden = true
  }

  function handleSignOut() {
    setUser({});
    document.getElementById("signInDiv").hidden = false
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

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  return (
    <div>

      <Helmet>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>

      <h1 id = "InitialHeading"> WEBSITE TITLE </h1>

      {(typeof backendData.users == 'undefined') ? (
        <p>Loading ...</p>
      ): (
        backendData.users.map((user,i) => (
          <p key = {i} >{user}</p>
        ))
      )}

      <div id="signInDiv"></div>
      { Object.keys(user).length != 0 &&
        <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
      }
      {user &&
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }
      
    </div>
  )
}

export default App