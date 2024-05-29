const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();


// const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./AttendanceData.db', (err) => {
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Connected to database");
    }
});

// app.use(express.json());

app.get("/api", (req, res) => {
    var sql = 'SELECT * FROM DemoData';
    let params = 0;
    
    if(params>0){
        sql+=" AND "
    }
    else{
        sql+=" WHERE "
    }

    if(req.query.grade){
        sql+=' WHERE GradeLevel='+req.query.grade;
        params++;
    }
    if(req.query.race){
        sql+='CalculatedRace='+req.query.race;
        params++;
    }
    if(req.query.econDis){
        sql+='EconomicallyDisadvantaged='+req.query.econDis;
        params++;
    }
    if(req.query.detention){
        sql+='HasDetentions='+req.query.detention;
        params++;
    }

    if(req.query.fourAbsences){
        sql+='Has04DayUxAbsLtr='+req.query.fourAbsences;
        params++;
    }
    if(req.query.tenAbsences){
        sql+='Has10DayUxAbsLtr='+req.query.tenAbsences;
        params++;
    }
    if(req.query.nineAbsences){
        sql+='Has09DayAbsLtr='+req.query.nineAbsences;
        params++;
    }
    if(req.query.fifteenAbsences){
        sql+='Has15DayAbsLtr='+req.query.fifteenAbsences;
        params++;
    }

    console.log(sql);
    db.all(sql, (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
        } else {
            res.json(rows);
        }
    });
    sql='';
})

app.listen(8080, () => {console.log("Server started on port 8080")})