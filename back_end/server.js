const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

var APIRouter = require('./routes/API');

app.use('/API', APIRouter);

// This is the sample test route to make sure the server is running
app.get('/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'Curator', lastName: 'View'},
    {id: 2, firstName: 'Elderly', lastName: 'Person'},
    {id: 3, firstName: 'Trusted', lastName: 'Circle'},
  ];

  res.json(customers);
});

//process.env.port gets the port used, this is goood if we are going to deploy a server because a port can
//change depending on server so it will check if a server has a specific port, if not it will use port 5000
const port = process.env.port || 5000; 

app.listen(port, () => `Server running on port ${port}`);