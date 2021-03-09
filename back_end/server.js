const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

var APIRouter = require('./routes/API');

app.use('/API', APIRouter);

app.get('/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'Curator', lastName: 'View'},
    {id: 2, firstName: 'Elderly', lastName: 'Person'},
    {id: 3, firstName: 'Trusted', lastName: 'Circle'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);