import React, {useEffect, useState} from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';
import NavBar from '../components/NavBar';

function StudentSearch(){

    const [backendData, setBackendData] = useState([])

    function findStudents() {
        let params = 0;
        let query = "/api"
        var firstOption = document.getElementById("gradeLevel")
        var gradeLevel = firstOption.options[firstOption.selectedIndex].text
        if(!(gradeLevel === "None")){
          query += "?grade=" + gradeLevel
          params++;
          console.log(params)
        }
    
        var secondOption = document.getElementById("calculatedRace")
        var calculatedRace = secondOption.options[secondOption.selectedIndex].text;
        if(!(calculatedRace === "None")){
          if(params>0){
            query+="&"
          }
          else{
            query+="?"
          }
          query += "race=" + '\''+calculatedRace+'\''
          params++;
        }
    
        var thirdOption = document.getElementById("economicallyDisadvantaged")
        var economicallyDisadvantaged = thirdOption.options[thirdOption.selectedIndex].text;
        if(!(economicallyDisadvantaged === "None")){
          if(params>0){
            query+="&"
          }
          else{
            query+="?"
          }
          query += "econDis="
          if(economicallyDisadvantaged==='Yes'){
            query += '\'Y\''
          }
          else{
            query += '\'N\''
          }
          params++;
        }
    
        var fourthOption = document.getElementById("hasDetentions")
        var hasDetentions = fourthOption.options[fourthOption.selectedIndex].text;
        if(!(hasDetentions === "None")){
          if(params>0){
            query+="&"
          }
          else{
            query+="?"
          }
          query += "detention="
          if(hasDetentions==='Yes'){
            query += '\'Y\''
          }
          else{
            query += '\'N\''
          }
          params++;
        }
    
        var fifthOption = document.getElementById("overNineAbsences")
        var overNineAbsences = fifthOption.options[fifthOption.selectedIndex].text;
        if(!(overNineAbsences === "None")){
          if(params>0){
            query+="&"
          }
          else{
            query+="?"
          }
          query += "nineAbsences="
          if(overNineAbsences==='Yes'){
            query += '\'Y\''
          }
          else{
            query += '\'N\''
          }
          params++;
        }
    
        var sixthOption = document.getElementById("overFourUnexcused")
        var overFourUnexcused = sixthOption.options[sixthOption.selectedIndex].text;
        if(!(overFourUnexcused === "None")){
          if(params>0){
            query+="&"
          }
          else{
            query+="?"
          }
          query += "fourAbsences="
          if(overFourUnexcused==='Yes'){
            query += '\'Y\''
          }
          else{
            query += '\'N\''
          }
          params++;
        }
    
        console.log(query)
    
        fetch(query).then(
          response => response.json()
        ).then(
          data => {
            console.log(typeof data)
            setBackendData(data)
          }
        )
    
        console.log(query)
      }

    useEffect(() => {
    })

  return (
    <div>
        <NavBar />
      <br></br>
      <br></br>
      <br></br>
        <div class = "container">
        <div class = "row">
          <div class = "col-lg-6">
            <div class = "well">
              <h2 id = "dataHeading">Find Students</h2>
              <div class = "btn-group">
                <div class = "select">
                  <p>Grade Level</p>
                  <select id = "gradeLevel" class="form-select" aria-label="Default select example">
                    <option selected>None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>

                <div class = "select">
                  <p class = "selectParagraph">Calculated Race</p>
                  <select id = "calculatedRace" class="form-select" aria-label="Default select example">
                    <option selected>None</option>
                    <option value="1">White</option>
                    <option value="2">Asian</option>
                    <option value="3">Multiple Races</option>
                    <option value="4">Black</option>
                    <option value="5">Hispanic</option>
                  </select>
                </div>

                <div class = "select">
                <p class = "selectParagraph">Economically Disadvantaged</p>
                  <select id = "economicallyDisadvantaged" class="form-select" aria-label="Default select example">
                    <option selected>None</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </select>
                </div>

                <div class = "select">
                <p class = "selectParagraph">Has Detentions</p>
                  <select id = "hasDetentions" class="form-select" aria-label="Default select example">
                    <option selected>None</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </select>
                </div>

                <div class = "select">
                <p class = "selectParagraph">Over 9 Absences</p>
                  <select id = "overNineAbsences" class="form-select" aria-label="Default select example">
                    <option selected>None</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </select>
                </div>

                <div class = "select">
                <p class = "selectParagraph">Over 4 Unexcused Absences</p>
                  <select id = "overFourUnexcused" class ="form-select" aria-label="Default select example">
                    <option selected>None</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </select>
                </div>

              </div>

            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <Button onClick = { (e) => findStudents(e)} id = "submitButton" variant="outline-light">Submit</Button>
      </div>
        <br></br>
        <p id = "studentResponse">
            Student Search
        </p>
        {(typeof backendData == 'undefined') ? (
            <p>Loading ...</p>
        ): (
            backendData.map((student, i) => 
            <p key = {i} >{student.FirstName} {student.LastName}, Grade: {student.GradeLevel}, Race: {student.CalculatedRace}, Econ Disadvantaged: {student.EconomicallyDisadvantaged}, Detentions: {student.HasDetentions}, &gt;9 Absences: {student.Has09DayAbsLtr}, &gt;4 Absences: {student.Has04DayUxAbsLtr}</p>
            )
        )}
    </div>
  )
}

export default StudentSearch