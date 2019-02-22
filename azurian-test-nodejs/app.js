const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => {
    console.log("Server running on port 3000");
});

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const azurianDB = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'azuriantest'
});

app.get('/contacts', (req, res) => {
    let sql = mysql.format('SELECT * FROM `contact`');

    azurianDB.query(
        sql,
        (err, results) => {
            res.status(200).send(results);
        }
    );

});

app.post('/contacts', (req, res) => {
    let sql = mysql.format('INSERT INTO `contact` (name, lastname, email, phone) VALUES (?,?,?,?)',
        [req.body.name, req.body.lastname, req.body.email, req.body.phone]);

    azurianDB.query(
        sql,
        (err, results) => {
            res.status(200).send(results);
        }
    );

});

app.delete('/contacts/:id', (req, res) => {
        let sql = mysql.format('DELETE FROM `contact` WHERE `contact`.`id` = ?', [req.params.id]);

        azurianDB.query(
            sql,
            (err, results) => {
                res.status(200).send(results);
            }
        );
});

app.put('/contacts/:id', (req, res) => {
        let sql = mysql.format('UPDATE `contact` SET `name` = ?, `lastname` = ?, `email` = ?, `phone` = ? WHERE `id` = ?',
            [req.body.name, req.body.lastname, req.body.email, req.body.phone, req.params.id]);

        azurianDB.query(
            sql,
            (err, results) => {
                res.status(200).send(results);
            }
        );
});