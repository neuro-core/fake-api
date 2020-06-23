# Fake API

Some fake apis for debug and dev

## Usage

* add new fake api as `.json` file to [/api](./api) folder
* edit `.env` file
```
PORT=23700 - Active port
ROUTES=api/db.json - path to active JSON API
REWRITE_POST_AS_GET=true - handle POST requests as GET requests
```

## License

Thanks to:

* [api-now](https://github.com/ngduc/api-now)
* [json-server](https://github.com/typicode/json-server)
