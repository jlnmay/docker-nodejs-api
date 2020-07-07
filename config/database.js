"use strict";

const env = "development";
const knexfile = require("../knexfile");
const knex = require("knex")(knexfile[env]);

module.exports = knex;
