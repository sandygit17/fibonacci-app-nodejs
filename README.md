Fibonacci App using Node.js and Express.js
This simple Node.js and Express.js application calculates Fibonacci numbers using recursion with memoization for improved performance.

Clone the repository:
git clone https://github.com/sandygit17/fibonacci-app-nodejs.git
cd fibonacci-app-nodejs

Install dependencies:
npm install

Running the Application:
npm start

The application will be running at http://localhost:3000.

Endpoints
    Calculate Fibonacci Number:
    Endpoint: /fibonacci/:position
    Method: GET
    Example Request: http://localhost:3000/fibonacci/10

Example Response:
    json
    {
        "position": 10,
        "fibonacciValue": 55
    }

Code Explanation
app.js
    The main file that sets up the Express.js server and defines the /fibonacci/:position endpoint.

fibonacci.js
    Contains the recursive Fibonacci function with memoization to improve performance.

Memoization Explanation
    The fibonacci function uses memoization to store previously calculated Fibonacci values, avoiding redundant calculations and improving performance.

Repository Link
https://github.com/sandygit17/fibonacci-app-nodejs
