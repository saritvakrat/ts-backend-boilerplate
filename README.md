## Boilerplate

# Editor
To use the .editorconfig in vs code install the following plugin: 
```
ext install EditorConfig
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode - using nodemon
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Dockerize app
to build the docker image run: docker build -t nest-docker .
** cd /deployments

    * the -t or a.k.a tag command to give our image a specific name tag. You can confirm your image by running the docker images command
    * to run the create images: docker run -p 3000:3000 nest-docker
    * visit http://localhost:3000/ on your browser, you should see Hello World!

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

# test mutation
$ npm run test:mutants
```

## API Swagger documentation
```
npm run start
```
URL: http://localhost:3000/api 

 To generate and download a Swagger JSON file, navigate to http://localhost:3000/api-json in your browser (assuming that your Swagger documentation is available under http://localhost:3000/api). 

More info: https://docs.nestjs.com/recipes/swagger#openapi-swagger
