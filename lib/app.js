/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superagent';



// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

//what is this doing.....
app.get('/', (req, res) => {
  res.send('Proxy API');
});

app.get('/location?search=<some city>', async (req, res) => {
  try {
    const LOCATION_KEY = process.env.LOCATION_DB_API_KEY;
    const response = await request.get('https://us1.locationiq.com/v1/search.php');
    // ?key=pk.3de0e3958948a51a05c8a2e040e86937&q={city-name}&format=json'
    console.log(response.body);
    res.json.send(response.body);

  }

  catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

// API routes,

export default app;