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
    console.log(sql);
    if(req.query.grade){
        sql+=' WHERE GradeLevel='+req.query.grade;
    }
    if(req.query.race){
        sql+=' WHERE CalculatedRace='+req.query.race;
    }
    db.all(sql, (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
        } else {
            console.log(typeof rows)
            res.json(rows);
        }
    });
    sql='';
})

app.listen(8080, () => {console.log("Server started on port 8080")})