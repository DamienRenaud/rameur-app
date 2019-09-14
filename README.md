# rameur-app

## Project FRONTEND setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Project BACKEND setup

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

## Project MONGO DB setup

### Deploy mongodb
```
docker run --name rameur-mongodb -p 27017:27017 -v data:/data/db -d mongo
```

### Stop database
```
docker stop rameur-mongodb
```

### Start mongodb
```
docker start rameur-mongodb
```
