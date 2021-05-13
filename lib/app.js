/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superagent';
import { formatLocations } from './utils.js';



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

app.get('/location', async (req, res) => {
  try {
    const LOCATION_KEY = process.env.LOCATION_DB_API_KEY;
    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${LOCATION_KEY}&q=${req.query.search}&format=json`);
    // ?key=pk.3de0e3958948a51a05c8a2e040e86937&q={city-name}&format=json'
    // query({ key: LOCATION_KEY });
    // query({ query: req.query.search });

    //munge the data
    const locations = formatLocations(response.body);
    //send it back
    res.json(locations);
  }

  catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

// app.get('/location', async (req, res) => {
//   try {
//     const LOCATION_KEY = process.env.LOCATION_DB_API_KEY;
//     const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${LOCATION_KEY}&q=${req.query.search}&format=json`);
//     // ?key=pk.3de0e3958948a51a05c8a2e040e86937&q={city-name}&format=json'
//     // query({ key: LOCATION_KEY });
//     // query({ query: req.query.search });

//     //munge the data
//     const locations = formatLocations(response.body);
//     //send it back
//     res.json(locations);
//   }

//   catch (err) {
//     console.log(err);
//     res.status(500).send({ error: err });
//   }
// });

// API routes,

export default app;