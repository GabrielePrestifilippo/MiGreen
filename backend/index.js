const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

let rawdata = fs.readFileSync('products.json');
const mapProduct = JSON.parse(rawdata);

app.get('/', (req, res) => {
  console.log(req.query.id);

  const id = req.query.id;

  const myDocId = mapProduct[id];

  const docRaw = fs.readFileSync('products/' + myDocId + '.json');

  return res.send(JSON.parse(docRaw));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
