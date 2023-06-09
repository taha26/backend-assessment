# backend test category E
Instructions: Please complete the following tasks to the best of your ability. You may use any online resources or documentation that you find necessary. Feel free to ask any clarifying questions if needed.

Task 1: Create an authentication system

Build a Node.js script that implements a basic authentication system using JSON Web Tokens (JWT). The system should have the following functionalities:

-   Sign up: Users can create a new account by providing a unique username and a password. Store the user credentials securely using a hashing algorithm of your choice.
-   Login: Users can log in using their username and password. If the credentials are valid, generate a JWT token and return it in the response.
-   Protected route: Implement a protected route `/protected` that can only be accessed with a valid JWT token. Return a success message when the token is valid, and return an error message for invalid or expired tokens.

Task 2: Secure API with rate limiting

Extend the RESTful API you created in the previous version to include rate limiting for certain routes. Implement the following features:

-   Rate limiting: Limit the number of requests per minute for the `/users` route to 100 requests. Return a 429 status code if the limit is exceeded.
-   IP blocking: After five failed login attempts within five minutes from the same IP address, block further login attempts from that IP address for one hour.

Task 3: Performance optimization

Optimize the performance of your Node.js application. Identify any bottlenecks or areas that can be improved, and implement changes to enhance the performance of your application. Provide a summary of the optimizations you made and any performance metrics (such as response time or throughput) you can gather to demonstrate the improvements.

## All APIs

### POST Signup:
- /auth/signup

#### BODY:

```json
{
  "username":"Taha",
  "email": "tahakhan26402@gmail.com",
  "password":"admin",
}
```


### POST Login:
- /auth/login

#### BODY:

```json
{
  "email": "tahakhan26402@gmail.com",
  "password":"admin",
}
```


### POST Refresh Token:
- /auth/refresh-token

#### BODY:

```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGFoYSIsImlhdCI6MTY4NjM0MTczMn0.epu62QGPhPk5fUyaBVxMJW-UGtC9U6MagLx9ECJXAek"
}
```


### GET Products:
- /product

AUTHORIZATION: Bearer accessToken
