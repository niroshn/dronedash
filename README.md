##Dronedash

#Used Technologies

# Backend

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

# Frontend

- React.js
- Redux
- Redux Saga

#Run Application

Run API

```sh
cd api
npm install
npm start
```

then open localhost:3000/drone/all on browser

Run React App

---

```sh
cd ui
npm install
npm start
```

then open localhost:7070

#Run App using Docker
Run React App

---

````sh
cd api

# Build your docker
docker build -t api .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 api
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port

Run API
------
```sh
cd api

# Build your docker
docker build -t api .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 api
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port  
````
