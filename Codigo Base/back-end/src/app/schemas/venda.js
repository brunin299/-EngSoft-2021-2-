import mongoose from '@/database';
import { Schema } from 'mongoose';

const venda = new mongoose.Schema({
  valor: {
    type: String,
    required: true,
  },
  nomeCliente: {
    type: [Schema.Types.ObjectId],
    ref: 'cliente',
  },
  nomeFuncionario: {
    type: [Schema.Types.ObjectId],
    ref: 'funcionario',
  },
  produtos: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('venda', venda);
