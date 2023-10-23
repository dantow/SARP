<div align="center">

[<img src="https://github.com/RMNorbert/SARP/blob/development/sarp/public/sarp.png" alt="logo" width="200">](README.md)

[![Mapbox GL JS](https://img.shields.io/badge/mapbox%20gl%20js-black?logo=mapbox&logoColor=66FF01&labelColor=black&style=for-the-badge)](https://www.mapbox.com/)
[![Java Script](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=F7DF1E&labelColor=black)](https://www.javascript.com/)
[![React](https://img.shields.io/badge/React-black.svg?logo=react&logoColor=blue&labelColor=black&style=for-the-badge)](https://reactjs.org/)

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

---
# Features

**- Search and mark places on the map**

**- Remove marks from the map when the placemark checkbox is inactive by clicking on the map in radious of 30 meter of the mark**

**- Plan route between marked places**

**- Set route type and customize the color of the drawn route**

**- Display information about the planned route**

---
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

#### Available Scripts

In the project directory, you can run:

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

