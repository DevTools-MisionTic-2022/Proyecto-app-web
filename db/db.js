//importar mongoose
import mongoose from 'mongoose';

//Funcion que conecta a la base de datos
//como va a un servidor debe esperar una respuesta
const conexionBD = async()=>{
  return await mongoose.connect(process.env.URL_BD)
  .then(()=>{
    console.log('Conexion a la BD exitosa')
  }).catch((error)=>{
    console.error('Error en la conexion',error)
  })
};
  export default conexionBD;