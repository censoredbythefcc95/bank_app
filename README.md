# Mock Banking App

Welcome to the Mock Banking App project! This full-stack application is designed to serve as my portfolio on GitHub, showcasing my skills in web development. The app simulates a banking experience, providing users with features for account signup, login, and secure password encryption using bcrypt.

## Table of Contents

- [Project Overview](#project-overview)
- [Phases of the Project](#phases-of-the-project)
- [Technologies](#technologies)
- [Wireframe](#wireframe)
- [Components](#components)
- [Layout](#layout)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Mock Banking App is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application. It aims to demonstrate key functionalities of a banking system, including user authentication and secure password storage.

## Phases of the Project

1. **Approval Phase**
   - Define project goals and features.
   - Get project approval and gather initial requirements.

2. **Technologies Selection**
   - Choose the MERN stack for development.
   - Select additional libraries/tools for authentication, encryption, and styling.

3. **Wireframe**
   - Design the application's basic layout and user interface using wireframes.
   - Identify key user interactions and features.

4. **Backend Development**
   - Set up the Node.js and Express.js server.
   - Implement MongoDB for data storage.
   - Create API routes for user signup and login.
   - Integrate bcrypt for password encryption.

5. **Frontend Development**
   - Build React components for user interfaces.
   - Connect frontend to backend through API calls.
   - Implement user authentication flows.

6. **Layout**
   - Design and implement the overall layout of the application.
   - Create responsive designs for both desktop and mobile.

7. **Testing**
   - Conduct unit tests for backend API routes.
   - Perform frontend testing for user interactions and authentication.

8. **Deployment**
   - Deploy the application to a hosting platform (e.g., Heroku, Netlify).

## Technologies

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Bcrypt for password encryption
  - JWT for authentication

- **Frontend:**
  - React.js
  - React Router for navigation
  - Axios for API calls
  - Styled-components for styling

## Wireframe

![Wireframe](link-to-your-wireframe-image)

[Link to detailed wireframes](link-to-wireframes-documentation)

## Components

### Authentication Components

1. **SignUpForm**
   - Input fields for username, email, password, etc.
   - Button to submit the signup form.

2. **LoginForm**
   - Input fields for username/email and password.
   - Button to submit the login form.

### Dashboard Components

1. **AccountSummary**
   - Display key account information such as balance, recent transactions.

2. **TransactionHistory**
   - Show a list of recent transactions.

## Layout

The layout will be designed to be user-friendly and responsive for both desktop and mobile users. The color scheme and styling will align with a professional banking application, ensuring a clean and intuitive user experience.

## Schemas for Mongoose

Two schemas for users and transaction information. 

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Other user-related fields can be added as needed
});

const transactionSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, required: true },
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  // Other transaction-related fields can be added as needed
});



## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install` in both the client and server directories.
3. Set up a MongoDB database and configure the connection string in the server.
4. Run the backend server using `npm start` in the server directory.
5. Run the frontend application using `npm start` in the client directory.

## Contributing

Feel free to contribute to the project! Check out the [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE).
