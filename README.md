<p align="center">

  <h1>Fleet Desktop Application (back-end )</h1>
  <h3> (Built with NestJS) </h3>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo"/></a>
</p>

<!-- ABOUT THE PROJECT -->
## About The Project

Application allowing to enter orders to the database and see the history of the orders.

More about app functionality can find [here](https://github.com/Alexit0/myfleet) 

### Built With

[![Node.js][Node.js-badge]][Node.js-url] <br>
[![Nest.js][Nest.js-badge]][Nest.js-url] <br>
[![MongoDB][MongoDB-badge]][MongoDB-url] <br>
[![Mongoose][Mongoose-badge]][Mongoose-url] <br>



## Installation

```bash
$ npm install
```

## Running the app

1. Follow all the steps on [MongoDB Website](https://account.mongodb.com/) to create/connect your database.
2. Create .env file in the main folder containing the variable storing your connection string:
  ```
  ATLAS_CONNECT = 'your connection string'
  ```
3. Run the app:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Node.js-badge]: https://img.shields.io/badge/Node.js-18.15.0-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://nodejs.org/

[Nest.js-badge]: https://img.shields.io/badge/Nest.js-v10.0-red?style=for-the-badge
[Nest.js-url]: https://nestjs.com/

[MongoDB-badge]: https://img.shields.io/badge/MongoDB-v6.3.0-green?style=for-the-badge
[MongoDB-url]: https://www.mongodb.com/

[Mongoose-badge]: https://img.shields.io/badge/Mongoose-v8.0.3-orange?style=for-the-badge
[Mongoose-url]: https://mongoosejs.com/

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
