const { Client } = require("pg");

const client = new Client ({
  host: "127.0.0.1" ,
  user: "u0_a317",
  port: 5432,
  password: "db209805",
  database: "resdb"
})


module.exports = client;