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

    console.log(params)

    if(req.query.grade){
        if(params>0){
            sql+=" AND "
        }
        else{
            sql+=" WHERE "
        }
        sql+='GradeLevel='+req.query.grade;
        params++;
    }
    if(req.query.race){
        if(params>0){
            sql+=" AND "
        }
        else{
            sql+=" WHERE "
        }
        sql+='CalculatedRace='+req.query.race;
        params++;
    }
    if(req.query.econDis){
        if(params>0){
            sql+=" AND "
        }
        else{
            sql+=" WHERE "
        }
        sql+='EconomicallyDisadvantaged='+req.query.econDis;
        params++;
    }
    if(req.query.detention){
        if(params>0){
            sql+=" AND "
        }
        else{
            sql+=" WHERE "
        }
        sql+='HasDetentions='+req.query.detention;
        params++;
    }

    if(req.query.fourAbsences){
        if(params>0){
            sql+=" AND "
        }
        else{
            sql+=" WHERE "
        }
        sql+='Has04DayUxAbsLtr='+req.query.fourAbsences;
        params++;
    }
    if(req.query.tenAbsences){
        if(params>0){
            sql+=" AND "
        }
        else{
            sql+=" WHERE "
        }
        sql+='Has10DayUxAbsLtr='+req.query.tenAbsences;
        params++;
    }
    if(req.query.nineAbsences){
        if(params>0){
            sql+=" AND "
        }
        else{
            sql+=" WHERE "
        }
        sql+='Has09DayAbsLtr='+req.query.nineAbsences;
        params++;
    }
    if(req.query.fifteenAbsences){
        if(params>0){
            sql+=" AND "
        }
        else{
            sql+=" WHERE "
        }
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