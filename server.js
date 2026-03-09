const express = require('express');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
app.use(express.json());





const mongoURI = "mongodb://localhost:27017/dbSecurityDb";

mongoose.connect(mongoURI)
  .then(() => console.log("Success: Connected to dbSecurityDb in Compass"))
  .catch((err) => console.error("Connection Error:", err));

app.use('/api', dataRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));