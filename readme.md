[![Build Status](https://travis-ci.org/koechkevin/random-phone-number-generator.svg?branch=master)](https://travis-ci.org/koechkevin/random-phone-number-generator)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7fad5f0692fa7b69c26b/test_coverage)](https://codeclimate.com/github/koechkevin/random-phone-number-generator/test_coverage)
[![Coverage Status](https://coveralls.io/repos/github/koechkevin/random-phone-number-generator/badge.png?branch=master)](https://coveralls.io/github/koechkevin/random-phone-number-generator?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/koechkevin/random-phone-number-generator/badge.svg?branch=master)](https://coveralls.io/github/koechkevin/random-phone-number-generator?branch=master)

# random-phone-number-generator
random-phone-number-generator is a javascript application that generates random phone numbers for a telecommunication company. The length of a phone number is 10 digits starting with a zero.

## Setup
 - Libraries, tools and Frameworks
    - React js - A JavaScript library for building user interfaces
    - Redux - A state management tool for javascript applications
    - Node js - Javascript runtime environment
    - Express js - A Javascript web applications framework.
    - webpack 4 - A bundler for assets and scripts
    - Babel 7 - A Javascript transpiler that transforms the latest versions to browser compatible versions.
- Clone the repository - `$ git clone https://github.com/koechkevin/random-phone-number-generator.git` 
- Change into the project directory - `$ cd random-phone-number-generator`
- Install the dependencies - `$ yarn install`
    - Please provide the following environment variables
    
    ```
        DATABASE_HOST - your database host name
        DATABASE_NAME - The name of your database
        DATABASE_PASSWORD - password
        DATABASE_URL - URI for your database
        DATABASE_USER - your username on the database
        TEST_DATABASE - This a database name you will run the tests against
        PORT - the port number your application will run on. This defaults to 3000 if its not provided
    ```
    
  #### Production
    - Transpile the code and bundle by running `$ yarn build`
    - Run any available migrations - `$ yarn migrate`
    - Run the server `$ yarn start`

  #### Development
     - Start the api with `$ yarn dev:back`. This uses the default port you provided on environment variables
     - Run any available migrations - `$ yarn migrate`
     - Start the application by running the command `$ yarn start:dev`. This will run the application and serve on port 8080.
     
  #### Testing
    - Run the tests using `$ yarn test`
     
