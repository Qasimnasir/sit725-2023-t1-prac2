const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., index.html)
app.use(express.static(__dirname));

// Handle POST request for calculations
app.post('/calculate', (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  switch (operator) {
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '-':
      result = Number(num1) - Number(num2);
      break;
    case '*':
      result = Number(num1) * Number(num2);
      break;
    case '/':
      result = Number(num1) / Number(num2);
      break;
    default:
      result = 'Invalid operator';
  }

  res.send({ result });
});

app.listen(port, () => {
  console.log(`http://localhost:3000`);
});
