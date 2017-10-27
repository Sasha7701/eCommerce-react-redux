# eCommerce  <br> React eCommerce Project 
Front-end project app utilizing React. This React project is an eCommerce website that will showcase products, allow users to add them to the shopping cart and finally check out with all of one's products when the user has completed shopping.

## Getting Started

You must be on a Node version greater than 6 to use this. Once you've npm
installed, there are only two commands:

* `npm run start` - Runs the development server (Specify port with PORT, default 3000)
* `npm run build` - Builds the production version, which goes into `dist`

## Project Structure

```
server/       		       # Backend source code
├── index.js   			     ### Server entry point
├── middleware 			     ### Reusable middleware
├── models     			     ### Sequelize data models
│
├── routes               ### Where all routing happens
│   ├── admin.js         ##### Admin pages, render using views
│   ├── api.js           ##### Endpoints that deal only in JSON
│   └── react.js         ##### Handle rendering the React template, dev server
│
├── util                 ### Shared utility functions
│   ├── sequelize.js     ##### Sequelize instance w/ config
│   
│
└── views                ### Admin views only
    ├── pages            ##### Pages that are included by template.ejs
    └── template.ejs     ##### Shared template for admin pages


src/       		           # Backend source code
├── App.jsx        		   ### The top-level component for React
├── App.scss             ### Any general, non-component styling done here
├── index.ejs            ### HTML template for the app
├── index.js             ### Webpack entry point / component mounting
├── components/          ### Any shared components
├── pages/               ### Any shared pages
├── assets               ### Static assets
│     ├── fonts          ##### Fonts(eot|otf|ttf|woff|woff2)
│     └── images         ##### Images (gif|png|jpe?g|svg|ico)
dist                     # Any built files are here, not checked in
webpack.config.js        # Webpack configuration for dev _and_ production

```
## Technology used

* Node is a multi-platform, open-source Javascript run-time environment that executes code on the server-side.
<br><br>
* React is a Javascript library designed at making the process of building modular, reusable user interface components simple and intuitive.
