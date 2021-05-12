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

app.get('/location', (req, res) => {
  try {

    const response = await request.get(
      )

  }
});

// API routes,

export default app;