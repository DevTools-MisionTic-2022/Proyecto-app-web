//importar librerias
import conexionBD from './db/db.js';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';


dotenv.config();
//Se define la aplicacion de express
const app = express();
//permite que los request entren y salgan en formato json
app.use(express.json())
//Middelware que permite hacer requeste desde muchos origenes
app.use(cors());
//Escucha el puerto de conexion a la base de datos
app.listen({ port: process.env.PORT }, async()=>{
  await conexionBD();
  console.log('Escuchando puerto 4000')
});




