# Where2 Project

## Introduction

Where2 is a web application backend designed for managing user authentication and reviews. This project utilizes Node.js, Express, Mongoose, and several other middleware and utilities to create a robust backend system.

## Features

* User authentication (login/signup/logout)
* Session management
* CRUD operations for reviews
* Connection to MongoDB using Mongoose
* Error handling

## Prerequisites

Before you begin, ensure you have met the following requirements:

* Node.js installed
* MongoDB installed and running
* A basic understanding of JavaScript and Node.js

## Installation

To install Where2, follow these steps:

1. Clone the repository:
bash

git clone https://github.com/rlacerna/where2.git

2. Navigate to the project directory:

cd where2

3. Install the required dependencies:

npm install

## Configuration

Create a .env file in the project root and add the following:

DATABASE_URL=your_mongodb_connection_string
PORT=4000

## Running the Application

To run Where2, execute:

npm start

## Usage

The application exposes several endpoints for user and review management.

## User Endpoints

* POST /login: Log in a user
* POST /signup: Sign up a new user
* GET /logout: Log out the current user
## Review Endpoints

* GET /reviews: Get all reviews
* POST /reviews: Create a new review
* PUT /reviews/:id: Update a review
* DELETE /reviews/:id: Delete a review
* GET /reviews/:id: Get a specific review

## Contributing

To contribute to Where2, follow these steps:

1. Fork this repository.
2. Create a branch: git checkout -b <branch_name>.
3. Make your changes and commit them: git commit -m '<commit_message>'
4. Push to the original branch: git push origin <project_name>/<location>
5. Create the pull request.

Alternatively, see the GitHub documentation on creating a pull request.

## Contact

If you have any questions or feedback, please email renzlacerna13@gmail.com
