import { gql } from 'apollo-server-express';
import { tiposEnums } from '../modelos/enum/tipos.js';
import { tiposUsuario } from '../modelos/usuario/tipos.js';
import { tiposProyecto } from '../modelos/proyecto/tipos.js';
import { tiposAvance } from '../modelos/avance/tipos.js';
import { tiposInscripcion } from '../modelos/inscripcion/tipos.js';
import { tiposAutenticacion } from './auth/tipos.js';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales,
  tiposEnums,
  tiposUsuario,
  tiposProyecto,
  tiposAvance,
  tiposInscripcion,
  tiposAutenticacion,
];