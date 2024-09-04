// Import the Express module
const express = require('express');
 
// Create an Express application
const app = express();
 
// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
 
// Define the port number and start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

 
