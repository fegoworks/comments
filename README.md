<!-- @format -->

# Essay Checker

A simple comments API that exposes endpoints for CRUD operations.

# Table of Contents

- [Technology Stack](#tstack)
- [Features](#features)
- [Getting Started](#started)
- [Pre-requisites](#require)
- [Installation](#installation)
- [Running tests](#tests)
- [API Endpoints](#endpoints)

## Technology Stack<a name="tstack"></a>

- Nodejs
- PostgreSQL
- Sequelize

## Features<a name="features"></a>

- Users can
  - Sign in
  - create, read, delete, update comments
  - Reply to comments

## Getting Started<a name="started"></a>

To run this API locally simply follow the instructions below:

#### Prerequisites<a name="require"></a>

You need to have or install the following:

1. Git bash
2. Npm
3. Postman

#### Installation<a name="installation"></a>

- clone repo
  ```
  git clone https://github.com/fegoworks/comments.git
  ```
- navigate to api folder
- run installation
  ```
  npm install
  ```
- create a `.env` file with this template

  ```
  DATABASE_URL = 'Your postgres database url'
  DATABASE_URL_TEST = 'Your postgres test database url'
  DATABASE_URL_DEVELOPMENT = 'Your postgres database url'
  PORT = 'Your local port'
  SECRET = 'Your secret phrase'
  ```

- run migrations

  ```
  npm run migrate
  ```

- start app
  ```
  npm run start:dev
  ```
- you can now make requests using postman to `localhost:3000/api/v1/`

## Running Tests<a name="tests"></a>

To run tests simply run the following command in your git bash or command line

```
npm run test
```

### API endpoints

Heroku: [Comments-Fg](https://comments-fg.herokuapp.com/)
Documentation: [Essay-Checker-API-Docs]()

| Endpoints                         | Functionality                           |
| --------------------------------- | --------------------------------------- |
| POST /auth/create-user            | Create new user account                 |
| POST /auth/signin                 | Login a user                            |
| POST /comments                    | Create comments                         |
| GET /comments                     | View all comments                       |
| GET /comments/:commentId          | View a specific comment and its replies |
| PATCH /comments/:commentId        | Edit and update a specific comment      |
| DELETE /comments/:commentId       | Remove a particular comment             |
| POST /comments/:commentId/replies | Reply a particular comment              |

### Sign up<a name="endpoints"></a>

Send a `POST` request to `/api/v1/auth/create-user` with the following JSON structure:

```json
{
  "firstName": "Sensei",
  "lastName": "Saitama",
  "email": "saitama@mail.com",
  "password": "password"
}
```

### Sign in with the user

Send a `POST` request to `/api/v1/auth/signin`, with the following:

```json
{
	"email": ,
	"password":
}
```

When you signin you'll receive a `Bearer token`. You'll need this token to send any request related to comments.

> Frow now on, every request described here will require you send
> the Bearer token

### Create a comment

Send a `POST` request to `/api/v1/comments`, with the following:

```json
{
  "comment": "There's a lot of issues to comment on"
}
```

### View all comments

Send a `GET` request to `/api/v1/comments/`

### View a specific comment

Send a `GET` request to `/api/v1/comments/:commentId`, this will return the comments and its replies

### Edit a specific comment

Send a `PATCH` request to `/api/v1/comments/:commentId`, with the following:

```json
{
  "comment": "There's still a lot of issues to comment on and maybe fix"
}
```

### Delete a comment

Delete a comment by placing its id in the `DELETE` request URL
`/api/v1/comments/:commentId`.

### Reply a comment

Send a `POST` request to `/api/v1/comments/:commentId/replies`, with the following:

```json
{
  "reply": "How about we fix these issues"
}
```

## Author

Edafe Oghenefego
[@realFego](https://twitter.com/realFego)
