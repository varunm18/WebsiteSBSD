"use client";

import React, {useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import GoogleMaps from '../components/GoogleMaps'
import 'react-bootstrap'
import {APIProvider, Map, AdvancedMarker, Pin, useMapsLibrary}from "@vis.gl/react-google-maps"


function FindTrends(){

  const [backendData2, setBackendData2] = useState([])
  const southBrunswick = {lat:40.3807, lng:-74.5317};

  function findMarkersFour(){
    fetch("/api?fourAbsences=\'Y\'").then(
      response => response.json()
    ).then(
      data => {
        // console.log(data)
        getAddresses(data)
      }
    )
  }

  function findMarkersNine(){
    fetch("/api?nineAbsences=\'Y\'").then(
      response => response.json()
    ).then(
      data => {
        // console.log(data)
        getAddresses(data)
      }
    )
  }
  function findMarkersTen(){
    fetch("/api?tenAbsences=\'Y\'").then(
      response => response.json()
    ).then(
      data => {
        // console.log(data)
        getAddresses(data)
      }
    )
  }
  function findMarkersFifteen(){
    fetch("/api?fifteenAbsences=\'Y\'").then(
      response => response.json()
    ).then(
      data => {
        // console.log(data)
        getAddresses(data)
      }
    )
  }

  function getAddresses(data){
    var addresses = []
    for (var element of data) {
      var address = element.StreetName
      if(element.Neighborhood!=null){
        address += " "+element.Neighborhood
      }
      console.log(address)
      fetch("https://api.tomtom.com/search/2/geocode/"+address+".json?key=HIINKw8X8vReXkdGeRUh2hlIYl71QkWp&limit=1&lat=40.3807&lon=-74.5317&radius=16093").then(
        response => response.json()
      ).then(
        data => {
          console.log(data)
          if(data.summary.numResults==1){
            addresses.push({lat:data.results[0].position.lat, lng:data.results[0].position.lon})
          }
        }
      ).catch(error => {
        // Do something on error 
        console.log(error)
      })
    }

    setBackendData2(addresses)

    console.log(backendData2)
  }

  // useEffect(() => {

  // })

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
          <button id = "four" type="button" class="btn btn-secondary" onClick={(e) => findMarkersFour(e)}>Over 4 Unexcused Absences</button>
          <button id = "nine" type="button" class="btn btn-secondary" onClick = {(e) => findMarkersNine(e)}>Over 9 Absences</button>
          <button id = "ten" type="button" class="btn btn-secondary" onClick = {(e) => findMarkersTen(e)}>Over 10 Unexcused Absences</button>
          <button id = "fifteen" type="button" class="btn btn-secondary" onClick={(e) => findMarkersFifteen(e)}>Over 15 Absences</button>
        </div>
      </div>  
      </div>
      <br></br>
      <br></br>
      <APIProvider apiKey = {"AIzaSyBnX9LjqWKbPUNe-5OrZyKw4_5SHf13Th4"}>
            <div style={{height: "100vH", textAlign: "center", width: "1200px"}} id = "map">
                <Map zoom={13} center={southBrunswick} mapId={"77f21f50ae1bd9c9"}>
                    
                    {(typeof backendData2 == 'undefined') ? (
                          <p>Loading ...</p>
                      ): (
                          backendData2.map((location, i) => 
                          <AdvancedMarker position={location}>
                          
                            <Pin background={"grey"} borderColor={"green"}></Pin>
                          </AdvancedMarker>)
                    )}
                    <AdvancedMarker position={southBrunswick}>
                        <Pin background={"grey"} borderColor={"green"}></Pin>
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
      <br></br>
      <br></br>
    </div>
  )
}

export default FindTrends