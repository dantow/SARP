<div align="center">

[<img src="https://github.com/RMNorbert/SARP/blob/development/sarp/public/sarp.png" alt="logo" width="200">](README.md)

[![Mapbox GL JS](https://img.shields.io/badge/mapbox%20gl%20js-black?logo=mapbox&logoColor=66FF01&labelColor=black&style=for-the-badge)](https://www.mapbox.com/)
[![Java Script](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=F7DF1E&labelColor=black)](https://www.javascript.com/)
[![React](https://img.shields.io/badge/React-black.svg?logo=react&logoColor=blue&labelColor=black&style=for-the-badge)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/-docker-black.svg?logo=docker&logoColor=0197f6&labelColor=black&style=for-the-badge)](https://www.docker.com/)

</div>

---
# SARP
A map-based application for searching places and planning routes.

---
# Used technologies and packages:

**- React**

**- React-Router-Dom**

**- JavaScript**

**- Mapbox GL JS**

**- ESLint**

**- Prettier**

**- Docker**

---
# Features

**- Search and mark places on the map**

**- Remove marks from the map when the placemark checkbox is inactive by clicking on the map in radious of 30 meter of the mark**

**- Plan route between marked places**

**- Set route type and customize the color of the drawn route**

**- Display information about the planned route**

---
## Prerequisites in case of not using docker:

Make sure you have the following dependencies installed before proceeding with the installation:

Node.js and npm:

You'll need Node.js and npm (Node Package Manager) installed on your system.

Node.js is used to run JavaScript on the server, and npm is used to manage JavaScript packages.

You can download and install Node.js, which includes npm, from the official website: https://nodejs.org/

To check if Node.js and npm are installed, you can open your command line or terminal and run:
```
node -v
npm -v
```
These commands should display the installed Node.js and npm versions.

___
### To deploy Dentocrates using Docker containers, follow these steps:

#### [Install Docker](https://www.docker.com/get-started/):
  
  **For Linux**: Follow the instructions on the official Docker website.
  
  **For Windows or macOS**: Install Docker Desktop for an easy-to-use Docker environment.

___
#### After installing Docker:
 Ensure it's running by opening a terminal or command prompt and running the command 
 ```
 docker --version
 ```

Note: Docker is optional and recommended for deployment scenarios. If you're using Docker, it can help manage dependencies and ensure consistent environments.

___
## Installation:

  Follow these instructions to get a copy of the SARP project up and running on your local machine:

---
### 1. Clone the repository

```git@github.com:RMNorbert/SARP.git```

---
### 2. Set up the Mapbox token variable .
   Update the **config.js** file  **mapboxToken** key value which is located in : 

   ```sarp/src/```
   
   with your Mapbox token.

---
### 3. Run the project:

### Running the dockerized version:
  
1, Navigate to the project directory containing the docker-compose.yml file.
```
/sarp/
```

2, Run the following command to build and start the project:
```
docker-compose up --build
```

The docker-compose.yml file defines the service needed for running your application in a Docker container.
It simplifies deployment and ensures consistent setups across environments.
___

### If you don't want to use docker:

___
#### 1, Navigate to the project's sarp directory

___
#### 2, Install the project dependencies by the following command:

```
npm install
```

___
#### 3. You can use the following Scripts:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

