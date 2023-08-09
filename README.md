# Wiggles and Purrs Backend

https://wiggles-and-purrs.netlify.app/

Welcome to the backend codebase of Wiggles and Purrs, a heartwarming application dedicated to facilitating the connection between caring individuals and adorable abandoned animals like dogs, cats, and hedgehogs. Built with Node.js, Express.js, MongoDB, and axios, this backend system forms the foundation for creating new families and loving homes for our furry friends.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributors](#contributors)
- [Acknowledgements](#acknowledgements)

## Introduction
At Wiggles and Purrs, we believe in making a difference in the lives of abandoned animals and compassionate people. Our backend system provides the necessary APIs and data management tools for users to interact with the available pets, adoption requests, and "Found a Pet" submissions. The application fosters a community of animal lovers and enables seamless management of adoption processes through the Admin dashboard.

## Features
- API endpoints for user authentication, pet listings, adoption requests, and more.
- Integration with MongoDB for efficient and reliable data storage.
- Seamless communication with the frontend through axios requests.
- Admin dashboard for effective management of adoption requests and submissions.

## Getting Started
Follow these steps to set up and run the Wiggles and Purrs backend on your local machine.

### Installation
1. Clone this repository to your local machine using:
   ```bash
   git clone https://github.com/your-username/wiggles-and-purrs-backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd wiggles-and-purrs-backend
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

### Usage
1. Start the backend server:
   ```bash
   npm start
   ```

2. The backend API will be accessible at `http://localhost:5000`.

## API Endpoints
Here are some of the key API endpoints provided by the Wiggles and Purrs backend:

- `POST /api/login`: User login with authentication token generation.
- `GET /api/pets`: Retrieve a list of available pets for adoption.
- `POST /api/adopt`: Submit an adoption request for a pet.
- `POST /api/found`: Submit a "Found a Pet" form.
- ...

## Contributors
This backend system was developed collaboratively by talented individuals during the Ironhack bootcamp project:
- [Indra Tinot-Patole](https://github.com/IndraTNPTL)
- [Crystine Koh](https://github.com/CrystineKoh)

## Acknowledgements
We extend our gratitude to the Ironhack bootcamp instructors and mentors for their guidance and support throughout the development of this project. Special thanks to our fellow classmates for their inspiration and encouragement.

🎉 **Selected for Presentation:** This backend codebase was proudly selected to be presented by us at the Ironhack Hackshow of June 2023. We're excited to showcase our hard work and dedication in creating a meaningful backend system that supports the mission of connecting animals in need with loving homes.

Feel free to connect with us and share your feedback! Together, let's make a positive impact on the lives of our beloved pets. 🐾🏡
