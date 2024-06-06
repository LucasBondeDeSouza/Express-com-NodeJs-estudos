import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>About Me</h1><p>My name is Lucas</p>')
})

app.get('/contact', (req, res) => {
  res.send('<h1>Contact</h1><p><strong>Phone:</strong> +55 11912345678</p>')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
