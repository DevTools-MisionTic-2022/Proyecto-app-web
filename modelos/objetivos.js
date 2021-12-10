import mongoose from 'mongoose';
const { Schema, model } = mongoose;

//Crear esquema de los objetivos
const objectiveSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['GENERAL', 'ESPECIFICO'],
    required: true,
  },
});

const ObjectiveModel = model('Objetivos', objectiveSchema);

export { ObjectiveModel };