const express = require('express');
const mysql   = require('mysql');

const server = express();
server.use(express.json());
const port   = process.env.PORT || 5000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'plane-booking'
});

db.connect((error) => {
  if (error) {
    console.error('Error connecting to DB: ', error);
  }
  console.log('Successfully connected to DB');
});

// The backend always responds with an error and a message, which lets the frontend know
// if an issue has been caused and some issue regarding the error. 

// Simple testing route to see if backend works
server.get('/', (request, response) => {
  response.status(200).json({ error: false, message: 'Hello from the server!' });
});

/**
 * This allows the user to sign into their acccount
 * @String username = The username the user wantts to login with
 * @String password = The password the user wants to login with
 */
server.post('/user/login', (request, response) => {
  const { username, password } = request.body;
  if (username == null || username.trim() == '' || password == null || password.trim() == '') {
    response.status(400).json({ error: true, message: 'The username or password was incorrect' });
    return;
  }
  
  const query_ = `SELECT * FROM users WHERE username=\"${username}\" AND password=\"${password}\"`;
  db.query(query_, (error, results) => {
    if (error) {
      console.log('Error fetching user details: ', error);
      response.status(500).json({ error: true, message: 'Error fetching user details' });
      return;
    }
    if (results == null) {
      response.status(400).json({ errors: false, message: 'The username or password was incorrect' });
      return;   
    }
    response.status(200).json({ 
      errors: false, 
      message: 'There was no issue in fetching the data',
      result: true
    });
  })
});

/**
 * This allows the user to create an account
 * @String username = The username the user wants
 * @String password = The password the user wants
 */
server.post('/user/signup', (request, response) => {
  const { username, password } = request.body;
  if (username == null || username.trim() == '' || password == null || password.trim() == '') {
    response.status(400).json({ error: true, message: 'The username or password is not allowed' });
    return;
  }

  const query_ = `INSERT INTO users(username, password) VALUES(\"${username}\", \"${password}\")`;
  db.query(query_, (error, results) => {
    if (error) {
      console.log('Error inserting user details: ', error);
      response.status(500).json({ error: true, message: 'Error inserting user details' });
      return;
    }
    if (request == null) {
      response.status(400).json({ error: true, message: 'Unable to insert user details' });
      return;
    }
    response.status(200).json({ error: false, message: 'Successfully added user', });
  })
});

/**
 * This returns all the flights
 */
server.post('/flights/all', (request, response) => {

});

/**
 * This returns all the flights from a specific airline
 * @String airline = The airline to check for
 */
server.post('/flights/airline', (request, response) => {
  
});

/**
 * This returns all the flights to a specific country
 * @String country = The country to check for
 */
server.post('/flights/to', (request, response) => {

});

/**
 * This returns all the flights from a specific country
 * @String country = The country to check for
 */
server.post('/flights/from', (request, response) => {

});

/**
 * This returns all the flights that have that many availabl slots
 * @Int slots = The amount of available slots there should be
 */
server.post('/flights/availableslots', (request, response) => {

});

/**
 * This returns all the flights departing at the requested date
 * @Date date = The date to query for
 */
server.post('/flights/depart', (request, response) => {

});

/**
 * This returns all the flights arriving at the requested date
 * @Date date = The date to query for
 */
server.post('/flights/arrival', (request, response) => {

});

/**
 * This returns all the bookings of the user based on the username
 * @String username = The username to find all bookings for
 */
server.post('/bookings/by', (request, response) => {

});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
