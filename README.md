# StartKit with Docker

For Full Stack Developer  
nginx:alpine  
node:12.18.0  
create-react-app  
typescript

### Usage

\*Must have Docker installed

#### Development

To start the dev server, use `docker-compose up`  
To update docker, use `docker-compose up --build`  
To update npm, use `docker-compose up --build -V`

#### Production

To run production, use `docker-compose -f docker-compose-prod.yml up -d --build`  
To update npm, use `docker-compose -f docker-compose-prod.yml up -d --build -V`

#### Then

Go to `localhost` depending on which version of docker you have
