## Description

This a Nestjs basic project with 2 endpoints and connected to an API.

## Installation

```bash
$ npm install
```

Create an API example with next call

```bash
curl --location 'https://api.mocki.io/public/mocks' \
--header 'content-type: application/json' \
--data '{
    "attractions": [
        {
            "id": 1,
            "name": "My Name",
            "location": "Bruselas",
            "price": 10.2
        },
                {
            "id": 1,
            "name": "My Name",
            "location": "Bruselas",
            "price": 10.2
        }
    ]
}'
```
This call will return response body with a property called "url", this have to be replaced in API calls for attractions and ships.

## Running the app

```bash
# development
$ npm run start
```

## Testing the app
Once you have running the application you can use below endpoint to test the app:

http://localhost:3000/api/v1/Attractions

http://localhost:3000/api/v1/Ships


## Test

```bash
# unit tests
$ npm run test
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Pedro Anaya

## License

Nest is [MIT licensed](LICENSE).
