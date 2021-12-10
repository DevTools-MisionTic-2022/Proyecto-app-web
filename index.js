//importar librerias
import conexionBD from './db/db.js';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express'
import { resolvers } from './graphql/resolvers.js'
import { validateToken } from './utils/tokenUtils.js'
import { tipos } from './graphql/tipos.js'


dotenv.config();

//Se declara una variable donde se almacena la informacion del usuario por medio del token
const getUserData = (token) => {
  const verificacion = validateToken(token.split(' ')[1]);
  if (verificacion.data) {
    return verificacion.data;
  } else {
    return null;
  }
};

//Se declara una variable para el servidor Apollo
const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
  context: ({ req, res }) => {
    const token = req.headers?.authorization ?? null;
    if (token) {
      const userData = getUserData(token);
      if (userData) {
        return { userData };
      }
    }
    return null;
  },
})

//Se define la aplicacion de express
const app = express();
//permite que los request entren y salgan en formato json
app.use(express.json())
//Middelware que permite hacer requeste desde muchos origenes
app.use(cors());
//Escucha el puerto de conexion a la base de datos
app.listen({ port: process.env.PORT }, async()=>{
  await conexionBD();
  await server.start();

  server.applyMiddleware({ app });
  
  console.log('Escuchando puerto 4000')
});




