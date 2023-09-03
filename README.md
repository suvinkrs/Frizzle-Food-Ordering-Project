# Project Name: MERN Stack E-commerce Website

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

This project is a full-stack e-commerce website built on the MERN (MongoDB, Express.js, React, Node.js) stack. It serves as a fully functional platform for online shopping, allowing users to browse products, create accounts, log in, and view previous orders. The project also incorporates a component library that includes a navbar, footer, cards for displaying products, and a context reducer for managing state.

## Features

- **User Authentication**: Secure user authentication system with login and sign-up functionality.
- **Product Display**: A user-friendly interface for browsing and searching products.
- **Previous Orders**: Logged-in users can view their previous orders.
- **Component Library**: Includes reusable components such as a navbar, footer, and product cards.
- **Context Reducer**: Manages application state efficiently using a context reducer.

## Technologies Used

- **Frontend**:
  - React
  - React Router
  - Axios (for API requests)
  - Context API (for state management)
  - Component Library (navbar, footer, cards)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - JWT (JSON Web Tokens) for authentication

- **Deployment**:
  - Heroku (backend)
  - Netlify (frontend)

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install the dependencies for both the frontend and backend:

```bash
cd client
npm install
cd ../server
npm install
```

3. Configure environment variables:

   - Create a `.env` file in the `server` directory and configure the following variables:
     - `MONGODB_URI`: Your MongoDB database connection string.
     - `JWT_SECRET`: A secret key for JWT token generation.
     
   Example `.env` file:
   
   ```env
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   ```

4. Start the backend server:

```bash
cd server
npm start
```

5. Start the frontend development server (in a separate terminal):

```bash
cd client
npm start
```

6. Open your browser and navigate to `http://localhost:3000` to access the website.

## Usage

- Visit the landing page and browse the available products.
- Create an account or log in to access additional features.
- View previous orders under your account.
- Explore the website and enjoy shopping!

## Contributing

Contributions to this project are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature XYZ'`.
4. Push your changes to your fork: `git push origin feature-name`.
5. Open a pull request against the main repository.

## License

This project is licensed under the [MIT License](LICENSE).
