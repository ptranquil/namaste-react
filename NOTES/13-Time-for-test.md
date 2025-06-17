# Testing Types
    1. Unit Testing
        - Testing a component in isolation
    2. Integration Testing
        - Testing the feature where multiple components are inbvolved
    3. End to End Testing (e2e)
        - Testing the whole application at once

# library used for testcases in React
    1. React Testing Library (npm i --save-dev @testing-library/react)
        - it build on top of DOM testing library
        - It uses JEST which is a javascript testing framework behind the scene (npm i -D jest)
        - To use jest with babel we need to install other dependencies too
            (npm install --save-dev babel-jest @babel/core @babel/preset-env)
        - also we need to add some configuration to the babel.config.js
            module.exports = {
                presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
            }

# Point to remember
    - Parcel uses its own babel
    - What we did above is configuration of babel with jest
    - Now here a conflict will arise. i.e. when we install the above dependencies of parcel
    it will create a conflict with the parcels internal babel configuration with the current configuration present in babel.config.js
    -  So to avoid the conflict and make the parcel to use the babel.config.js we need to create a newfile .parcelrc (Configure the parcel configuration) and add the below code to disable babel transpilation
        {
            "extends": "@parcel/config-default",
            "transformers": {
                "*.{js,mjs,jsx,cjs,ts,tsx}": [
                    "@parcel/transformer-js",
                    "@parcel/transformer-react-refresh-wrap"
                ]
            }
        }
    - see: https://parceljs.org/languages/javascript/#usage-with-other-tools
    - After this we need to do the jest configuration
    - Command: npx create-jest
    - Install jest environment js-dom (which provide a browser like environment to jest to run test cases and provides all capability of browser)
        Command: npm i --save-dev jest-environment-jsdom
