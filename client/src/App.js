import React, {useEffect, useState} from 'react'
import { jwtDecode } from "jwt-decode";
import './App.css';


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
      <h1>SIGN IN PAGE</h1>
      <div id="signInDiv"></div>
        <div id="signOutDiv" hidden>
        { Object.keys(user).length != 0 &&
          <button id = "signOutButton" onClick={ (e) => handleSignOut(e)}>Sign Out</button>
        }
        {user &&
          <div>
            <img id = "userPicture" src={user.picture}></img>
            <h3 id = "username">{user.name}</h3>
          </div>
        }
      </div>
    </div>

  )

}

export default App