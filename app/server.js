const express = require('express');
const app = express();
const scraper = require('./scraper');

app.get('/', async (req, res) => {
  const data = await scraper();
  return res.json({ data });
});

app.listen(3000, () => console.log(`Running on ::3000`));
