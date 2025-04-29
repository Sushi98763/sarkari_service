const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const doctorRoutes = require('./routes/doctors');
app.use('/api/doctors', doctorRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log("Backend running at http://localhost:5000")))
  .catch(err => console.error(err));
