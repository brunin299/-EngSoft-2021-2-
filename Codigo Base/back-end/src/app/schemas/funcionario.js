import mongoose from '@/database';

const funcionario = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  salario: {
    type: String,
    required: true,
  },
});

export default mongoose.model('funcionario', funcionario);
