##### mission #####
By default We have install some node libraries

commands:

npm install express   
npm install mongoose    
npm install jsonwebtoken


define a specific port no as 3000/5080/8080 as per your wish 
so Application will start running on that Port.


================================================================================================================
Technical Notes:

## Table of Contents

- [Routes Folder](#routes-folder)
- [Controller Folder](#controller-folder)
- [Service Layer](#service-layer)
- [Model Layer](#model-layer)

In the `routes` folder, we handle the routing and access control for various API endpoints.

- **Custom Auth Middleware**: We define custom authentication middleware to manage access based on user roles and permissions.

- **Validation Layer (JOI)**: The `JOI` validation library is used to validate incoming data and ensure it's properly formatted to prevent issues downstream.

- **JWT Token for Public APIs**: JSON Web Tokens (`JWT`) are generated securely using a secret key to facilitate user authentication and authorization for public APIs.

## Controller Folder

The `controller` folder is responsible for handling incoming requests and formatting responses.

- **Direct Response from Service Layer**: Controllers call the appropriate service functions and format the responses for client consumption.

- **Error Handling**: We use appropriate HTTP status codes and error messages for clear client understanding. Middleware with `next()` is used to pass errors for proper error handling.

- **Destructuring Data**: Incoming data is destructured to simplify code and ensure only necessary parameters are passed to the service layer.

## Service Layer

The `service` layer encapsulates business logic and serves as an intermediary between controllers and models.

- **Independent Service Layers**: Each service handles a specific business logic aspect independently, promoting modularity and separation of concerns.

- **Redis and Web-Socket Integration**: Redis is used for caching and data storage, while WebSockets enable real-time communication to enhance application performance and functionality.

- **Data Acceptance and Logging**: Incoming data is accepted in destructured format for improved code readability. Logging using `logger.info` or `logger.debug` aids in monitoring and debugging.

## Model Layer

The `model` layer defines the data structure, validation, and interaction with the database.

- **Data Requirements and Defaults**: Model layer defines data requirements and default values, ensuring consistency and preventing data integrity issues.

- **Indexing**: Proper indexing, including compound indexing, is employed to enhance query performance in database calls.

- **Redis for Caching**: Redis is utilized as a caching layer to reduce database load and improve response times for frequently requested data.

- **JOI Validation**: JOI validation in the model layer enforces data consistency and prevents invalid data from being stored in the database.

==================================================================================================================================================================
