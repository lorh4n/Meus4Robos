const express = require('express');

//Inciando App
const app = express();
app.use(express.json());

//Rota
app.use('/', require("./src/routes"));

app.listen(4333);