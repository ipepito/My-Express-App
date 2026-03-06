const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve your HTML and parse JSON data
app.use(express.static('public'));
app.use(express.json());

// Main route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Route for the About page
app.get('/about', (req, res) => {
    res.send('About Us');
});

// POST route to handle your "Add" button submissions
app.post('/submit', (req, res) => {
    const data = req.body;
    console.log('Data received:', data);
    res.send(`Received: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
