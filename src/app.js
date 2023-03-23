const express = require('express')
const app = express()

app.get('/api', (req, res)=>{
    console.log('Paso por aca: /api');
    res.json({message:'Hola Mundo', estado:'OK'}).status(200)
 });

 app.listen(3000, ()=>{
    console.log('Estoy listo. escuchando en el puerto 3000');
 });
 
