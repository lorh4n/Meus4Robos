const express = require('express');

//Inciando App
const app = express();
app.use(express.json());

//Rota
app.use('/api', require("./src/routes"));

app.listen(3001);