- NPM is everything but not Node Package Manager
- The most important package in our app is bundler
    - As our whole code need to be bundled together before shipping it to production
    - Bundler mean cleaning, optimizing, minifying our code
    - E.g. Webpack, Parcel
- package.hjson: Contains the metadat of the project
    - ^ (caret): for minor versions
    - ~(tilder): for major versions
- package-lock.json: 
    - Keeps the record of exact version of the dependencies
    - It also keep the hash to compare what is installed in local machine is same as what is installed in production by comparing by the hash value (stored as "integrity" key)
- NPM : install the package
- NPX: Executing the project
- npx parcel index.html: will locally host the application

# Parcel
https://parceljs.org
    - Create Dev build
    - Create Local Server
    - HMR Uses (Hot Module Replacement) for instant change automatic reload
    - File Watching Algorithm written in C++
    - Faster build due to caching
    - Image Optimization
    - Minification of files
    - Bundling
    - Compress
    - Consistent Hashing
    - Code Splitting
    - Differential Bundling (Our code is able to run on different browsers, mobile etc also support lower versions)
    - Error Handling
    - HTTPs
    - Tree Shaking Algorithm (Removed unused code)
    - Different build for dev and prod bundles (npx parcel build index.html)

- we can use browsersList inside our package.json which will tell the on which browsers and version our app will support