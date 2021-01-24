## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript based auth service.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## How to test auth service ?

```bash
# GET /home
$ curl http://localhost:8080/home
$ # result -> {"statusCode":401,"error":"Unauthorized"}

$ # POST /auth/login
$ curl -X POST http://localhost:8080/auth/login -d '{"username": "admin", "password": "1234"}' -H "Content-Type: application/json"
$ # result -> {"access_token":"eyJhbGciO... }

$ # GET /home using access_token returned.
$ curl http://localhost:8080/home -H "Authorization: Bearer eyJhbGciO..."
$ # result -> Hello World
```


