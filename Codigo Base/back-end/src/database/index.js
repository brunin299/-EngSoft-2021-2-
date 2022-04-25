import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/engSoftware', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.Promise = global.Promise;

export default mongoose;
