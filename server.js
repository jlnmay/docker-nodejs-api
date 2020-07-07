"user strict";

const express = require("express");
const knex = require("./config/database");

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
    let customers = await knex
    .select("id", "first_name", "last_name")
    .from("customers");
    customers = JSON.parse(JSON.stringify(customers));

    res.status(200).json({
        customers
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
