const express = require("express");
const server = express();

//configuração do server
server.use(express.static('public'));

// habilitar a conexão com banco de doador
cons Pool = require('pg').Pool;
const db = new Pool ({
  user: 'postgres',
  password: '000',
  host: 'localhost',
  port: 8000,
  database: 'doe'
})
