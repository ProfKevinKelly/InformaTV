# Back End

This is the back end code for the react app InformaTV.

The code in this folder was built starting from this sample example: [original code](https://github.com/bradtraversy/react_express_starter)

# Current Progress

Some routes are not yet implemented like Reminders and Messages.

The checkUserInfo is called on button click from profile page.

# Backend Folders

## bin

Binaries

## node_modules

Added to gitignore as per convention

## public/stylesheets

Default stylesheet

## routes

The are currently three routes:

- API.js (our own API route to send and receive requests)
- index.js (the main route by default)
- user.js (the test route for testing of backend server)

## views

Default views

## gitignore

node_modules (convention)
.DS_Store (OSX file that gets added and causes issuses)

## config.js

config file for the database

## package-lock.json & package.json

dependancies

## server.js

test file for backend

## The below Quick Start and App Info are from [original code](https://github.com/bradtraversy/react_express_starter)

### Quick Start

```bash
# cd into back_end first and then continue with the rest 
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

### App Info

#### Author

Brad Traversy
[Traversy Media](http://www.traversymedia.com)

#### Version

1.0.0

#### License

This project is licensed under the MIT License
