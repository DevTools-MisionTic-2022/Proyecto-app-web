import { resolversProyecto } from '../modelos/proyecto/resolvers.js';
import { resolversUsuario } from '../modelos/usuario/resolvers.js';
import { resolversAvance } from '../modelos/avance/resolvers.js';
import { resolverInscripciones } from '../modelos/inscripcion/resolvers.js';
import { resolversAutenticacion } from './auth/resolvers.js';

export const resolvers = [
  resolversUsuario,
  resolversProyecto,
  resolversAvance,
  resolverInscripciones,
  resolversAutenticacion,
];