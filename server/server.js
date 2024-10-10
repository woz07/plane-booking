const express = require('express');

const server = express();
const port   = process.env.PORT || 5000;

server.get('/api', (request, response) => {
    response.json({ message: 'Hello from the server!' });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
