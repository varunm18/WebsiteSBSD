"use client";

import React from "react"
import {APIProvider, Map, AdvancedMarker, Pin}from "@vis.gl/react-google-maps"

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

fetch("").then((res) => res.json).then((data) => {
    console.log(data);
})


export default function GoogleMaps(){
    const southBrunswick = {lat:40.3807, lng:-74.5317};

    return(
        <APIProvider apiKey = {"AIzaSyBnX9LjqWKbPUNe-5OrZyKw4_5SHf13Th4"}>
            <div style={{height: "100vH", textAlign: "center", width: "1200px"}} id = "map">
                <Map zoom={13} center={southBrunswick} mapId={"77f21f50ae1bd9c9"}>
                    <AdvancedMarker position={southBrunswick}>
                        <Pin background={"grey"} borderColor={"green"}></Pin>
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    )
}