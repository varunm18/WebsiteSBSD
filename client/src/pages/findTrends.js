import React from 'react'
import NavBar from '../components/NavBar'
import GoogleMaps from '../components/GoogleMaps'
import 'react-bootstrap'


function findTrends(){

  function findMarkersFour(){
    var fourUnexcused = document.getElementById("four")
  }
  function findMarkersTen(){

  }

  function findMarkersNine(){

  }
  function findMarkersFifteen(){

  }
  
  return (
    <div>
      <NavBar/>
      <br></br>
      <br></br>
      <h1 id = "findTrendsHeading">Select One Category To Display Markers</h1>
      <br></br>
      <div class = "center">
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" aria-label="First group">
          <button id = "four" type="button" class="btn btn-secondary" onClick={findMarkersFour()}>Over 4 Unexcused Absenses</button>
          <button id = "ten" type="button" class="btn btn-secondary" onClick = {findMarkersTen()}>Over 10 Unexcused Absenses</button>
          <button id = "nine" type="button" class="btn btn-secondary" onClick = {findMarkersNine()}>Over 9 Absenses</button>
          <button id = "fifteen" type="button" class="btn btn-secondary" onClick={findMarkersFifteen()}>Over 15 Absenses</button>
        </div>
      </div>  
      </div>
      <br></br>
      <br></br>
      <GoogleMaps/>
      <br></br>
      <br></br>
    </div>
  )
}

export default findTrends