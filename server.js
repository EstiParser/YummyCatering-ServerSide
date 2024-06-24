const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRout = require('./routes/auth');
const businessRoute = require('./routes/business.Route');
const noteRoute =require('./routes/notesRoute');
const orderRoute =require('./routes/order.Route');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = 3001;

const mongoURI = 'mongodb://localhost:27017/YummyCatering';
mongoose.set('strictQuery', false);
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

app.use(express.json());
app.use('/auth', authRout);
app.use('/buisness', businessRoute);
app.use('/notes', noteRoute);
app.use('/order', orderRoute);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
