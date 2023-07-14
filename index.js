const express = require("express");
const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.set('view engine', 'hbs'); // Set Handlebars as the template engine

app.get('/', async (req, res) => {
  res.render('hello');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
