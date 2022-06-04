# StartKit with Docker

For Full Stack Developer  
nginx:alpine  
node:alpine  
create-react-app  
typescript

### Usage

Must have Docker installed

#### Development

To start the dev server, use `docker-compose up`  
To update docker, use `docker-compose up --build`  
To update npm, use `docker-compose exec [container] npm install`

#### Production

To run production, use `docker-compose -f docker-compose-prod.yml up -d --build`

#### Then

Go to `localhost:3000` depending on which version of docker you have

#### Clean Docker

Delete all containers: `docker rm -vf $(docker ps -aq)`  
Delete all the images: `docker rmi -f $(docker images -aq)`  
Delete everything: `docker system prune -a --volumes`
