
# Gsky Node API

Gsky Node API JS like Interface.

## Dependencies

The Gsky Node JS service is built using [Node.js](https://nodejs.org/en/), and can be executed either natively or using Docker, each of which has its own set of requirements.

Native execution requires:
- [Node.js](https://nodejs.org/en/)

Execution using Docker requires:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Getting started

Start by cloning the repository from github to your execution environment

```
git clone https://github.com/icpac-igad/gsky-node.git && cd gsky-node
```

After that, follow one of the instructions below:


### Using native execution

1. Create and set up your environment variables. See `.env.sample` for a list of variables you should set, which are described in detail in [this section](#environment-variables) of the documentation

    ```
    cp .env.sample .env
    ```

2. Install node dependencies using yarn:
    ```
    yarn
    ```

3. Start the application server:
    ```
    yarn start
    ```
### Using Docker

1. Create and set up your `.env`. You can find an example `.env.sample` file in the project root.The variables are described in detail in [this section](#environment-variables) of the documentation

    `cp .env.sample .env`

2. Build the image

    `docker build -t gsky_node .`

3. Run the service

`docker run --env-file ./.env -p 3000:3000 gsky_node`


## Environment Variables
- GSKY_OWS_URL => Gsky OWS Url
- GSKY_MAS_URL => Gsky MAS url

## Production Deployment 
This service is meant to be deployed together with other gsky related services as 
described [here](https://github.com/icpac-igad/eahw-gsky) using docker compose.

    