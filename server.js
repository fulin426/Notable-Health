const express = require('express');

const app = express();

app.get('/api/data', (req, res) => {
  const data = [
    {id: 1, name:'John Doe', age: 29},
    {id: 2, name:'Jane Smith', age: 40},
    {id: 3, name:'Bob Taylor', age: 18}
  ];
  res.json(data);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))