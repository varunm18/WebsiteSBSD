import React from 'react'
import NavBar from '../components/NavBar'
import GoogleMaps from '../components/GoogleMaps'
import 'react-bootstrap'


function findTrends(){

  function findMarkersFour(){
    let query = "/api";
    query += "?fourAbsences="
    query += '\'Y\''
    console.log(query);
  }
  function findMarkersTen(){
    let query = "/api";
    query += "?tenAbsences="
    query += '\'Y\''
    console.log(query);
  }

  function findMarkersNine(){
    let query = "/api";
    query += "?nineAbsences="
    query += '\'Y\''
    console.log(query);
  }
  function findMarkersFifteen(){
    let query = "/api";
    query += "?fifteenAbsences="
    query += '\'Y\''
    console.log(query);
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
          <button id = "four" type="button" class="btn btn-secondary" onClick={findMarkersFour()}>Over 4 Unexcused Absences</button>
          <button id = "ten" type="button" class="btn btn-secondary" onClick = {findMarkersTen()}>Over 10 Unexcused Absences</button>
          <button id = "nine" type="button" class="btn btn-secondary" onClick = {findMarkersNine()}>Over 9 Absences</button>
          <button id = "fifteen" type="button" class="btn btn-secondary" onClick={findMarkersFifteen()}>Over 15 Absences</button>
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