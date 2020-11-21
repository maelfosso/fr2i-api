![](https://img.shields.io/badge/Microverse-blueviolet)

# FR2I competition - Mobile computing (API)

> Build a platform for oneline/offline data collection through a mobile application and synchronization on a web server.

This is the API of the platform, build with **api**. As features, using `socket.io`, it receives data from the [Mobile application](https://github.com/maelfosso/fr2i-tracer) and send it to the [web application](https://github.com/maelfosso/fr2i-web).

## Built With

- NodeJS
- Express
- Docker
- Docker compose

## Live Demo

Hosted in Heroku and the database is MongoDB Cloud.

## Getting Started

### Prerequisites

`docker-compose` installed. If you don't have it, you must have `NodeJs` and `yarn` installed.

### Setup

- Clone the repository `git clone https://github.com/maelfosso/fr2i-api.git`
- Change the current directory `cd fr2i-api`
- Install the dependencies `yarn install`
- Run the application `PORT=4000 yarn dev`
- The API is now available through `http://localhost:4000`

### Usage

Alone, this project can't work. It must be connected to the frontend.
Download it [here](https://github.com/maelfosso/fr2i-web) and follow the instruction to install it

## Docker

As indicated up there, it's possible to run it using `docker-compose`.
You will not have to download the source code to run it.
Kindly follow this [link](http://github.com/maelfosso/fr2i-competition) and follow the instruction to deploy the whole platform.

## Authors

👤 **Mael FOSSO**

- GitHub: [@maelfosso](https://github.com/maelfosso)
- Twitter: [@maelfosso](https://twitter.com/maelfosso)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/mael-fosso-650b6346/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](lic.url) licensed.